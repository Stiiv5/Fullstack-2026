import { useState, useEffect } from 'react'
import FilaEmpleado from './components/FilaEmpleado'

function App() {
  const [empleados, setEmpleados] = useState([]);
  
  // Variables para el formulario
  const [nombre, setNombre] = useState('');
  const [puesto, setPuesto] = useState('');
  const [salario, setSalario] = useState('');

  const cargarEmpleados = async () => {
    const res = await fetch('http://localhost:8000/empleados');
    const data = await res.json();
    setEmpleados(data);
  };

  
  useEffect(() => {
    const fetchDatos = async () =>{
      await cargarEmpleados();
    };
    fetchDatos();

  }, []);

  const guardarEmpleado = async (e) => {
    e.preventDefault(); // Evita que la página se recargue
    await fetch('http://localhost:8000/nuevo-empleado', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ nombre, puesto, salario: parseFloat(salario) })
    });
    // Limpiar formulario y recargar lista
    setNombre(''); setPuesto(''); setSalario('');
    cargarEmpleados();
  };

  return (
    <div className="App">
      <h1>Gestión de Empleados Full Stack</h1>

      {/* FORMULARIO */}
      <form onSubmit={guardarEmpleado} style={{marginBottom: '20px'}}>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
        <input value={puesto} onChange={(e) => setPuesto(e.target.value)} placeholder="Puesto" />
        <input value={salario} onChange={(e) => setSalario(e.target.value)} placeholder="Salario" type="number" />
        <button type="submit">Guardar Empleado</button>
      </form>

      {/* TABLA */}
      <table border="1" style={{width: '100%'}}>
        <thead>
          <tr><th>Nombre</th><th>Puesto</th><th>Salario</th></tr>
        </thead>
        <tbody>
          {empleados.map(emp => <FilaEmpleado key={emp.id} {...emp} />)}
        </tbody>
      </table>
    </div>
  )
}

export default App;