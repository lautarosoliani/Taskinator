import React, { useState } from "react"

const Select = () => {
    const [selectstate, setState] = useState("")

    const handleState = (event) => {
        setState(event.target.value)
    }

    return (
        <>
            <select onChange={handleState} value={selectstate}>
                <option value="not finished">Not Finished</option>
                <option value="completed">Completed</option>
            </select>
            <select name="estado de tarea" id="categorias">
                <option value="organization">Organization</option>
                <option value="home">Home</option>
                <option value="business">Business</option>
                <option value="health">Health</option>
                <option value="studies">Studies</option>
            </select>
        </>
    )
}

export default Select
