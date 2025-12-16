#Desafío de Lógica (FizzBuzz): Este es un clásico de las entrevistas. Usa un bucle for para recorrer los números del 1 al 100.

#Si el número es divisible por 3, imprime la palabra "Fizz".

#Si el número es divisible por 5, imprime la palabra "Buzz".

#Si el número es divisible por 3 Y por 5, imprime "FizzBuzz".

#Si no es divisible por 3 ni por 5, simplemente imprime el número.

#Pista: Usa el operador módulo (%) para verificar la divisibilidad (si numero % 3 == 0, es divisible por 3).


contador = 0

for i in range(1, 101):
    if (i % 3 == 0) and (i % 5 == 0):
        print(i, "FizzBuzz")
    elif i % 3 == 0:
        print(i, "Fizz")
    elif i % 5 == 0:
        print(i, "Buzz")
    else:
        print(i)
    