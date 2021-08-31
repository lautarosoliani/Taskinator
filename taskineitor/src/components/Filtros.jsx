import "./Filtros.css"

const Filtros = () => {
    return (
        <>
            <div className="filtros contenedor-principal-filtros">
                <h1>desde Filtros.jsx</h1>
                <div className="contenedor-inputs">
                    <input type="date" />
                    <input type="date" />
                    <select name="categorias" id="categorias">
                        <option value="Incompleta">Incompleta</option>
                        <option value="Completada">Completada</option>
                    </select>
                    <select name="estado de tarea" id="categorias">
                        <option value="Organizacion">Organizacion</option>
                        <option value="Casa">Casa</option>
                        <option value="Negocio">Negocio</option>
                        <option value="Salud">Salud</option>
                        <option value="Estudios">Estudios</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Filtros
