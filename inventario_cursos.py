cursos_programación = {
    "Backend con Python": {
        "horas": 60,
        "profesor": "Laura",
        "temas": ["Django", "FastApi", "SQL"]
    },
    "Front end con React": {
        "horas": 45,

    }
}

print(cursos_programación["Backend con Python"]["profesor"])


#for tema in cursos_programación["Backend con Python"]["temas"]:
    #print(tema)

agregar_tema = cursos_programación["Backend con Python"]["temas"]

agregar_tema.append("Manejo de estado")

for tema in cursos_programación["Backend con Python"]["temas"]:
    print(tema)