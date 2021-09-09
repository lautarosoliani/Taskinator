import "./Filtros.css"
import React from "react"
import SelectCategorias from "./sub-components/SelectCategorias"
import SelectEstadosDeTarea from "./sub-components/SelectEstadosDeTarea"

export const Filtros = () => {
    return (
        <>
            <input type="date"></input>
            <div className="filtros contenedor-principal-filtros">
                <h1>desde Filtros.jsx</h1>
                <div className="contenedor-inputs">
                    From: <input type="date"></input>
                    To: <input type="date" />
                    <SelectCategorias />
                    <SelectEstadosDeTarea />
                </div>
            </div>
        </>
    )
}

export default Filtros
