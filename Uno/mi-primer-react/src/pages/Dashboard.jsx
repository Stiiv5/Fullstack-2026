import { useState, useEffect } from 'react'
import FilaEmpleado from '../components/FilaEmpleado'
import Navbar from '../components/Navbar'
import { Route } from 'react-router-dom';



function App() {
  const [empleados, setEmpleados] = useState([]);  
  const [cargando, setCargando] = useState(true);
  
  // Variables para el formulario
  const [nombre, setNombre] = useState('');
  const [puesto, setPuesto] = useState('');
  const [salario, setSalario] = useState('');

  const cargarEmpleados = async () => {
    setCargando(true);
    try {
      const res = await fetch('http://localhost:8000/empleados');
      const data = await res.json();
      setEmpleados(data);

    } catch (error){
      console.error("Error al cargar:", error)
    } finally{
      setCargando(false)
    }
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

  const eliminarEmpleado = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar a este talento?")){
      await fetch(`http://localhost:8000/eliminar-empleado/${id}`, {method: 'DELETE',

      });
      cargarEmpleados();
    }
  };
  
  return (  
        
    <div className="min-h-screen bg-gray-900 text-white p-8 font-sans">
    
      <div className="max-w-4xl mx-auto my-8">
          <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
            NullVoice: Gestión Pro
          </h1>
          <p className="text-gray-400">Camino a Mayo 2026 • Backend Python & Frontend React</p>
        </header>

        {/* FORMULARIO MODERNO */}
        <section className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-300">Registrar Nuevo Talento</h2>
          <form onSubmit={guardarEmpleado} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input 
              className="bg-gray-700 border-none rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required 
            />
            <input 
              className="bg-gray-700 border-none rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={puesto} onChange={(e) => setPuesto(e.target.value)} placeholder="Cargo" required 
            />
            <input 
              className="bg-gray-700 border-none rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={salario} onChange={(e) => setSalario(e.target.value)} placeholder="Salario" type="number" required 
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95"
            >
              Añadir +
            </button>
          </form>
        </section>

        {/* SPINNER CARGANDO */}
        {cargando ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2  border-blue-500"></div>
            <p className="ml-4 text-gray-400 font-mono" >
              Consultando base de datos...
            </p>
          </div>
          ) : (
            <section className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
            </section>
          )}    

        {/* TABLA ESTILO DASHBOARD */}
        <section className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-700/50 text-gray-300 text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Nombre</th>
                <th className="px-6 py-4">Puesto</th>
                <th className="px-6 py-4">Salario</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {empleados.map(emp => <FilaEmpleado key={emp.id} {...emp} alBorrar={() => eliminarEmpleado(emp.id)} />)}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

export default App;