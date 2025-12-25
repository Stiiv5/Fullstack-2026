import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard'; // Crearemos esto ahora
import Reportes from './pages/Reportes';   // Y esto también

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto p-8">
        <Routes>
          {/* Ruta principal: Muestra la gestión de empleados */}
          <Route path="/" element={<Dashboard />} />
          
          {/* Nueva ruta: Muestra las estadísticas */}
          <Route path="/reportes" element={<Reportes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;