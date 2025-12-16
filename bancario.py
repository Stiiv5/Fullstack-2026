class CuentaBancaria:
    def __init__(self, titular):
        self.titular = titular
        self.saldo = 0

    def depostiar(self, monto):
        self.saldo += monto
        print(f"Deposito éxitoso. nuevo saldo: ${self.saldo}")
    
    def retirar(self, monto):
        if monto <= self.saldo:
            self.saldo -= monto
            print(f"Retiro éxitoso. Nuevo saldo: ${self.saldo}")
        else:
            print("Fondos Insuficientes.")
        
    def mostrar_detalles(self):
        print(f"Hola {self.titular}, tu saldo actual es ${self.saldo}")

Cuenta = CuentaBancaria("Brayan")

Cuenta.mostrar_detalles()

Cuenta.depostiar(500)

Cuenta.retirar(200)

Cuenta.retirar(900)





        