from fastapi import FastAPI

#Creamos la aplicación
app = FastAPI()

#Definimos una "Ruta"
@app.get("/")
def inicio():
    return {"Mensaje": "¡Buenvenido a mi primer API profesional!"}

@app.get("/estado")
def check_status():
    return {"status": "online", "proyecto": "Fullstack 2026"}

