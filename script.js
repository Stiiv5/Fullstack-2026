const tabla = document.getElementById('tabla-empleados');

async function cargarEmpleados() {
    try{
        //Direccion de mi FASTAPI
        const respuesta = await fetch('http://127.0.0.1:8000/empleados');
        const empleados = await respuesta.json();

        // Limpiamos la tabla antes de llenarla
        tabla.innerHTML = '';

        //Por cada empleado que nos dio la API, creamos una fila en la tabla
        empleados.forEach(emp => {
            const fila = `
                <tr>
                    <td>${emp.nombre}</td>
                    <td>${emp.salario}</td>
                </tr>
            `;
            tabla.innerHTML += fila;
        });

    }catch (error){
        console.log("Hubo un error al conectar la API", error)
    }
    
}

async function guardarEmpleado(){
    const nombre = document.getElementById('nombre').value;
    const salario = document.getElementById('salario').value;

    const nuevoEmpleado ={
        nombre: nombre,
        salario: parseFloat(salario)
    };

    const respuesta = await fetch('http://127.0.0.1:8000/nuevo-empleado',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoEmpleado)
    });

    if (respuesta.ok) {
        alert("¡Empleado guardado!");
        document.getElementById('nombre').value = '';
        document.getElementById('salario').value = '';

        cargarEmpleados();
    }else{
        alert("Error al guardar el empleado.")
    }
}

cargarEmpleados();