function FilaEmpleado({nombre, puesto, salario, alBorrar}) {
    return (
        <tr className="hover:bg-gray-700/30 transition-colors group">
            <td className="px-6 py-4 font-medium text-blue-100">{nombre}</td>
            <td className="px-6 py-4 text-gray-400">{puesto}</td>
            <td className="px-6 py-4 text-emerald-400 font-mono font-bold">${salario}</td>
            <td className="px-6 py-4 text-right">
                <button 
          onClick={alBorrar}
          className="text-gray-500 hover:text-red-400 transition-colors p-2 rounded-full hover:bg-red-400/10"
          title="Eliminar"
        >
          {/* Un icono simple de "X" o papelera */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
            </td>
        </tr>
    );
}

export default FilaEmpleado;