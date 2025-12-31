import {useState, useEffect} from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid} from 'recharts';


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
                <div className = "bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
                    <p className = "text-gray-900 dark:text-white text-sm uppercase font-bold">Total Personal</p>
                    <p className = "text-4xl font-extrabold text-gray-900 dark:text-white">{totalEmpleados}</p>                
                </div>
                
                {/* CARD 2 */}
                <div className = "bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
                    <p className = "text-gray-900 dark:text-white text-sm uppercase font-bold">Costo Mensual</p>
                    <p className = "text-4xl font-extrabold text-gray-900 dark:text-white">{nominaTotal}</p>                
                </div>

                {/* CARD 3 */}
                <div className = "bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
                    <p className = "text-gray-900 dark:text-white text-sm uppercase font-bold">Salario Promedio</p>
                    <p className = "text-4xl font-extrabold text-gray-900 dark:text-white">{salarioPromedio}</p>                
                </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl mt-8 h-80">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Comparativa de Salarios</h3>
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={empleados}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="nombre" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                    />
                    <Bar dataKey="salario" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
        </div>
    );
}

export default Reportes;