function FilaEmpleado({nombre, puesto, salario}) {
    return (
        <tr>
            <td>{nombre}</td>
            <td>{puesto}</td>
            <td>${salario}</td>
        </tr>
    );
}

export default FilaEmpleado;