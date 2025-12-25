import {useState, useEffect} from 'react';

function Reportes(){
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/empleados')
            .then(res => res.json())
            .then(data => setEmpleados(data));
    }, []);

    const totalEmpleados = empleados.length;
    const nominaTotal = empleados.reduce((acc, emp) => acc + emp.salario, 0);
    const salarioPromedio = totalEmpleados > 0 ? (nominaTotal / totalEmpleados).toFixed(2) : 0;

    return (
        <div className = "animate-fadeIn mt-15">
            <h2 className = "text-3xl font-bold text-blue-400 mb-6">Análisis de Nómina</h2>

            <div className = "grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CARD 1 */}
                <div className = "bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg">
                    <p className = "text-gray-400 text-sm uppercase">Total Personal</p>
                    <p className = "text-4xl font-extrabold text-white">{totalEmpleados}</p>                
                </div>
                
                {/* CARD 2 */}
                <div className = "bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg">
                    <p className = "text-gray-400 text-sm uppercase">Costo Mensual</p>
                    <p className = "text-4xl font-extrabold text-emerald-400">{nominaTotal}</p>                
                </div>

                {/* CARD 3 */}
                <div className = "bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-lg">
                    <p className = "text-gray-400 text-sm uppercase">Salario Promedio</p>
                    <p className = "text-4xl font-extrabold text-blue-500">{salarioPromedio}</p>                
                </div>
            </div>
        </div>
    );
}

export default Reportes;