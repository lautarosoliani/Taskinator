import "./Filtros.css"
import React from "react"

export const Filtros = () => {
    return (
        <>
            <input type="date"></input>
            <div className="filtros contenedor-principal-filtros">
                <h1>desde Filtros.jsx</h1>
                <div className="contenedor-inputs">
                    From: <input type="date"></input>
                    To: <input type="date" />
                </div>
            </div>
        </>
    )
}

export default Filtros
