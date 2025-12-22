from fastapi import FastAPI
import sqlite3
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]

)

@app.get("/empleados")
def obtener_empleados_de_la_db():
    #Conectamos la base de datos
    conexion = sqlite3.connect("mi_empresa.db")
    cursor = conexion.cursor()

    #Hacer la consula de SQL
    cursor.execute("SELECT * FROM empleados")
    datos = cursor.fetchall()

    #Cerramos la conexion
    conexion.close()

    #Transformamos los datos en una lista
    #JSON
    lista_final = []

    for fila in datos:
        lista_final.append({
            "id": fila[0],
            "nombre": fila[1],
            "saladio": fila[2]
        })

    return lista_final

class EmpleadoSchema(BaseModel):
    nombre: str
    salario: float

@app.post("/nuevo-empleado")
def guardar_empleado(empleado: EmpleadoSchema):
    conexion = sqlite3.connect("mi_empresa.db")
    cursor = conexion.cursor()

    cursor.execute(
        "INSERT INTO empleados (nombre, salario) VALUES (?, ?)", (empleado.nombre, empleado.salario)
    )

    conexion.commit()
    conexion.close()
    return {"Mensaje": "¡Empleado guardado existosamente!"}

