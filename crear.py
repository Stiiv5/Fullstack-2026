tareas = []
contador = 0

def crear_tarea():
    id = len(tareas) + 1
    titulo = input("Titulo: ")
    descripcion = input("Descripcion: ")
    tarea = {
        "id": id,
        "titulo": titulo,
        "descripcion": descripcion
    }

    tareas.append(tarea)


def mostrar_tareas():
    for t in tareas:
        print(f"ID: {t['id']}. Titulo: {t['titulo']} - {t['descripcion']}")

mostrar_tareas()
