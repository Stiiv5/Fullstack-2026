import {Link} from 'react-router-dom' // Muy Importante
import { useState, useEffect } from 'react';

function Navbar() {
  // 1. Iniciamos el estado revisando el localStorage
  const [darkMode, setDarkMode] = useState(() => {
  const saved = localStorage.getItem('theme');
  // Solo será true si el usuario lo eligió o si no hay nada guardado
  return saved === 'dark' || !saved; 
});

useEffect(() => {
  const root = window.document.documentElement;
  if (darkMode) {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('dark'); // <--- Asegúrate de que esta línea exista
    localStorage.setItem('theme', 'light');
  }
}, [darkMode]);


    return(
        <nav className = "bg-blue-800 border-b border-gray-700 p-4 mb-8 fixed top-0 min-w-screen">
            <div className = "max-w-4xl mx-auto flex justify-between items-center">
                <div className = "flex items-center space-x-2">
                    <Link to="/" className = "bg-blue-600 p-1.5 rounded-lg">
                        <span className = "text-white font-bold">NV</span>
                    </Link>
                    <span className = "text-xl font-bold tracking-tight">NullVoice<span className ="text-blue-500 dark:text-blue-600">Cloud</span></span>
                </div>

                <div className = "flex space-x-6 text-sm font-medium text-gray-200 dark:text-gray-300">
                    <Link to="/" className = "hover:text-blue-400 transition-colors">Dashboard</Link>
                    <Link to="/reportes" className = "hover:text-blue-400 transition-colors">Reportes</Link>
                    <Link to="/" className = "hover:text-blue-400 transition-colors">Ajustes</Link>
                </div>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all">
                    {darkMode ? '🌙 Dark' : '☀️ Light'}
                </button>
            </div>

        </nav>
    );
}

export default Navbar;