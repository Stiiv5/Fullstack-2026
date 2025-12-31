import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard'; // Crearemos esto ahora
import Reportes from './pages/Reportes';   // Y esto también
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="max-w-4xl mx-auto p-8">
        <Routes>
          {/* Ruta principal: Muestra la gestión de empleados */}
          <Route path="/" element={<Dashboard />} />
          
          {/* Nueva ruta: Muestra las estadísticas */}
          <Route path="/reportes" element={<Reportes />} />
        </Routes>
      </main>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;