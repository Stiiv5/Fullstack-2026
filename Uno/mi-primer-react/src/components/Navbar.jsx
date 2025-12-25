import {Link} from 'react-router-dom' // Muy Importante

function Navbar(){
    return(
        <nav className = "bg-blue-800 border-b border-gray-700 p-4 mb-8 fixed top-0 min-w-screen">
            <div className = "max-w-4xl mx-auto flex justify-between items-center">
                <div className = "flex items-center space-x-2">
                    <Link to="/" className = "bg-blue-600 p-1.5 rounded-lg">
                        <span className = "text-white font-bold">NV</span>
                    </Link>
                    <span className = "text-xl font-bold tracking-tight">NullVoice<span className ="text-blue-500">Cloud</span></span>
                </div>

                <div className = "flex space-x-6 text-sm font-medium text-gray-400">
                    <Link to="/" className = "hover:text-blue-400 transition-colors">Dashboard</Link>
                    <Link to="/reportes" className = "hover:text-blue-400 transition-colors">Reportes</Link>
                    <Link to="/" className = "hover:text-blue-400 transition-colors">Ajustes</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;