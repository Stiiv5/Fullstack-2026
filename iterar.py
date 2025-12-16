comidas = ["Pasta", "Pizza", "Salchipapas"]
#for c in comidas:
    #print(f"Me gusta comer {c}")

ingredientes = {
    "Salchipapas": ["Salchicha", "Papas", "Salsas"],
    "Hamburguesa": ["Pan", "Lechuga", "Carne", "Queso"],
    "pasta": "macarrones"
}

for f in ingredientes:
    print(f"Clave: {f} -> Valor: {ingredientes[f]}")


for clave, valor in ingredientes.items():
    print(f"El campo {clave} tiene el valor {valor}")