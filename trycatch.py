try:
    monto = float(input("Ingresa el monto a retirar: "))
    print(f"Retirando {monto}...")
except ValueError:
    print("Error: ¡Debes ingresar un número válido!")
finally:
    print("Operación finalizada.")