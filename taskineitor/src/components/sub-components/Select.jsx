import React from "react"

const Select = () => {
    return (
        <>
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
        </>
    )
}

export default Select
