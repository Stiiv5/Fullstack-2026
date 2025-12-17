import sqlite3

conexion = sqlite3.connect("Autos.db")
cursor = conexion.cursor()
cursor.execute("""CREATE TABLE IF NOT EXISTS automoviles (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               marca TEXT,
               modelo REAL,
               puestos REAL
               
)
""")
conexion.commit()

def crear_autos(marca, modelo, puestos):
    cursor.execute("INSERT INTO automoviles (marca, modelo, puestos) VALUES (?, ?, ?)", (marca, modelo, puestos) )

    conexion.commit()

def listar_autos():
    cursor.execute("SELECT * FROM automoviles")
    lista_autos = cursor.fetchall()
    for a in lista_autos:
        print(a)


crear_autos("Toyota", 2025, 6)
crear_autos("Hiunday", 2020, 4)
crear_autos("Ferrari", 2018, 2)

listar_autos()
