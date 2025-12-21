def calcular_total(precio, impuesto):
    total = precio + (precio * impuesto / 100)
    return total

print(calcular_total(100, 16))
print(calcular_total(1000, 19))

