from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3



app = FastAPI()

# 1. ESTO TIENE QUE IR AQUÍ ARRIBA
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

class Empleado(BaseModel):
    nombre: str
    puesto: str
    salario: float

def init_db():
    conn = sqlite3.connect("empresa.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS empleados(
                   id INTEGER PRIMARY KEY AUTOINCREMENT,
                   nombre TEXT,
                   puesto TEXT,
                   salario REAL
    )
    """)
    conn.commit()
    conn.close()

init_db()

@app.get("/empleados")
def obtener_empleados():
    conn = sqlite3.connect("empresa.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM empleados")
    datos = cursor.fetchall()
    conn.close()
    return [{"id": f[0], "nombre": f[1], "puesto": f[2], "salario": f[3]} for f in datos]

@app.post("/nuevo-empleado") 
def crear_empleado(emp: Empleado):
    conn = sqlite3.connect("empresa.db")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO empleados (nombre, puesto, salario) VALUES (?, ?, ?)", 
                   (emp.nombre, emp.puesto, emp.salario))
    conn.commit()
    conn.close()
    return {"status": "ok"}

@app.delete("/eliminar-empleado/{empleado_id}")
def eliminar_empleado(empleado_id: int):
    conn = sqlite3.connect("empresa.db")
    cursor = conn.cursor()
    cursor.execute("DELETE FROM empleados WHERE id = ?", (empleado_id,))
    conn.commit()
    conn.close()
    return {"status": "borrado"}

@app.put("/actualizarempleado/{empleado_id}")
def actualizar_empleado(empleado_id: int, empleado: Empleado):
    try:
        with sqlite3.connect("empresa.db") as conexion:
            cursor = conexion.cursor()

            cursor.execute("""
                        UPDATE empleados
                           SET nombre = ?, puesto = ?, salario = ?
                           WHERE id = ?
                           """, (empleado.nombre, empleado.puesto, empleado.salario))
            
            if cursor.rowcount == 0:
                conexion.close()
                raise HTTPException(status_code = 404, detail="Empleado no encontrado")
            
            conexion.commit()
            conexion.close()
        
        return {"message": "Empleado actualizado con éxito."}
    
    except sqlite3.Error as e:
        if conexion:
            conexion.close()
        raise HTTPException(status_code=500, detail=f"Error de base de datos: {e}")



