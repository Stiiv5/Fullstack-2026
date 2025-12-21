class Usuario:
    def __init__(self, nombre, rol):
        self.nombre = nombre
        self.rol = rol
        self.conectado = False

    def conectar(self):
        self.conectado = True
        print(f"El usuario {self.nombre} ahora está en Línea.")

usuario1 = Usuario("Brayan", "Jugador")
usuario2 = Usuario("Stiven", "NPC")

print(usuario1.nombre)
usuario1.conectar()
print(usuario2.rol)
