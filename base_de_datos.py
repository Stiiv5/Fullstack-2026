import sqlite3 as db

#Conectamos (si el archivo no existe, lo crea)
conexion = db.connect("mi_empresa.db")

#El cursor es el "mensajero" que lleva nuestras órdenes SQL
cursor = conexion.cursor()

#Creamos una tabla de EMPLEADOS(si no existe)
cursor.execute(""" CREATE TABLE IF NOT EXISTS empleados(
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               nombre TEXT NOT NULL,
               puesto TEXT,
               salario REAL
)
""")

#Guardamos los cambios y cerramos
conexion.commit()
conexion.close()

print("¡Base de datos y tabla creadas con éxito!")


#INSERT INTO empleados (nombre, puesto, salario) VALUES ('Stiiv', 'Dev', '3000')

#SELECT * FROM empleados

#UPDATE empleados SET salario = 3500 WHERE id = 1

#DELETE FROM empleados WHERE id = 1

