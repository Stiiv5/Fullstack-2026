from fastapi import FastAPI
import sqlite3

app = FastAPI()

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

@app.get("/crear_prueba")
def crear_prueba():
    conexion = sqlite3.connect("mi_empresa.db")
    cursor = conexion.cursor()

    #Insertar empleado de prueba
    cursor.execute("INSERT INTO empleados (nombre, puesto, salario) VALUES ('Stiiv', 'Futuro Fullstack', 5000)")

    conexion.commit()

    conexion.close()
    return {"Mensaje": "Empleado de prueba creado con éxito"}