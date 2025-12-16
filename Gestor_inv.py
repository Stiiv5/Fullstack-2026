inventario = []

def agregar_producto(nombre, precio):
    datos = {
        "nombre": nombre,
        "precio": precio
    }
    inventario.append(datos)

def mostrar_inventario():
    for i in inventario:
        print(f"- Producto: {i['nombre']} | Precio: {i['precio']}")


def buscar_producto(nombre):
    for i in inventario:
        if i["nombre"].lower() == nombre.lower():
            print(f"Producto encontrado: {i['nombre']} - {i['precio']}")
        else:
            print("Producto no encontrado.")    

agregar_producto("Coca-Cola", 2500)
mostrar_inventario()
buscar_producto("Coca-Cola")