import "./Filtros.css"
import React, { useState } from "react"

export const Filtros = () => {
    function Input() {
        return (
            <>
                <input
                    type="date"
                    onChange={handleInput}
                    value={inputState}
                ></input>
                <div className="filtros contenedor-principal-filtros">
                    <h1>desde Filtros.jsx</h1>
                    <div className="contenedor-inputs">
                        From: <input type="date"></input>
                        To: <input type="date" />
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
}

export default Filtros
