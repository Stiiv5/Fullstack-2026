import { useState, useEffect } from 'react'
import FilaEmpleado from '../components/FilaEmpleado'
import Navbar from '../components/Navbar'
import { Route } from 'react-router-dom';
import {Toaster, toast } from 'react-hot-toast';



function Dashboard() {
  const [empleados, setEmpleados] = useState([]);  
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState('');
  
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
    e.preventDefault();  // Evita que la página se recargue

    try{
      const res = await fetch('http://localhost:8000/nuevo-empleado', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ nombre, puesto, salario: parseFloat(salario) })
    });

    if (!res.ok){
      throw new Error('Error al guardar empleado');
    }
    
    toast.success('Empleado registrado correctamente',{
      style: {background: "#1f2937", color: "#fff"},
    });
    
    // Limpiar formulario y recargar lista
    setNombre('');
    setPuesto('');
    setSalario('');
    cargarEmpleados();

  }catch (error){
    console.error(error);
    toast.error('No se pudo conectar con el servidor');
  }
  };


  const eliminarEmpleado = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar a este talento?")){
      try {
        const res = await fetch(`http://localhost:8000/eliminar-empleado/${id}`, {method: 'DELETE',

      });

      if (res.ok){
        toast.success('Talento eliminado',{
          icon: '🗑️',
          style:{
            borderRadius: '12px',
            background: '#1f2937',
            color: '#fff',
            border: '1px solid #374151'
          },
        });
        cargarEmpleados();
      }
    } catch (error){
      console.error(error);
      toast.error('No se pudo eliminar el registro');
    }
    }
  };
  
    const exportarCSV = () => {
    const encabezados = ["ID", "Nombre", "Puesto", "Salario"];
    const filas = empleados.map(emp => [emp.id, emp.nombre, emp.puesto, emp.salario]);
    
    let contenidoCSV = "sep=,\n" + [encabezados, ...filas].map(e => e.join(",")).join("\n");

  const blob = new Blob(["\ufeff" + contenidoCSV], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);  
        
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "reporte_empleados_nullvoice.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };



  const empleadosFiltrados = empleados.filter(emp =>
    emp.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    emp.puesto.toLowerCase().includes(busqueda.toLowerCase())
  );
  
  
  return (  
        
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      
      <div className="max-w-4xl mx-auto my-20">
          <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold bg-linear-to-r from-blue-700 to-green-50 bg-clip-text text-transparent mb-2">
            NullVoice: Gestión Pro
          </h1>
          <p className="text-gray-500">Camino a Mayo 2026 • Backend Python & Frontend React</p>
          
        </header>

        
        {/* FORMULARIO MODERNO */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-400 dark:text-white">Registrar Nuevo Talento</h2>
          <form onSubmit={guardarEmpleado} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input 
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-none text-gray-900 dark:text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required 
            />
            <input 
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-none text-gray-900 dark:text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={puesto} onChange={(e) => setPuesto(e.target.value)} placeholder="Cargo" required 
            />
            <input 
              className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-none text-gray-900 dark:text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
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

        <div className = "relative mb-6 flex gap-2">

          <div className = "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

          <svg className ="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">

            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          </div>
           
          <input 
            type="text"
            placeholder="Buscar por nombre o cargo..."
            className = "block w-full pl-10 pr-3 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-none text-gray-900 dark:text-white rounded-xl leading-5 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-lg"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            />

            <button onClick={exportarCSV}
                className = "mb-4 text-xs hover:bg-gray-600 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-none text-gray-900 dark:text-white my-3 py-2 px-4 rounded-lg transition-all flex items-center gap-2">Descargar Excel (CSV) </button>

        </div>



        {/* SPINNER CARGANDO */}
        {cargando ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2  border-blue-500"></div>
            <p className="ml-4 text-gray-900 dark:text-white font-mono" >
              Consultando base de datos...
            </p>
          </div>
          ) : (
            <section className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            </section>
          )}    

        {/* TABLA ESTILO DASHBOARD */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-none text-gray-900 dark:text-white text-sm uppercase">
              <tr>
                <th className="px-6 py-4">Nombre</th>
                <th className="px-6 py-4">Puesto</th>
                <th className="px-6 py-4">Salario</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-400">
              {empleadosFiltrados.length > 0 ?(
                empleadosFiltrados.map(emp =>(
                  <FilaEmpleado key={emp.id} {...emp} alBorrar={() => eliminarEmpleado(emp.id)} />
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-10 text-center bg-gray-100 dark:bg-gray-600 border border-gray-700 dark:border-none text-gray-900 dark:text-white">
                    <div className="flex flex-col items-center">
                      <svg className="h-12 w-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-lg font-medium">No se encontraron resultados para "{busqueda}"</p>
                      <p className="text-sm">Intenta con otro nombre o cargo.</p>
                    </div>
                  </td>
                </tr>                
              )}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}


export default Dashboard;