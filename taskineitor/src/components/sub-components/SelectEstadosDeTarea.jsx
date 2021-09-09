import React, { useState } from "react"

const SelectEstadosDeTarea = () => {
    const [selectstate, setState] = useState("")

    const handleState = (event) => {
        setState(event.target.value)
    }
    return (
        <>
            <select onChange={handleState} value={selectstate}>
                <option value="organization">Organization</option>
                <option value="home">Home</option>
                <option value="business">Business</option>
                <option value="health">Health</option>
                <option value="studies">Studies</option>
            </select>
        </>
    )
}

export default SelectEstadosDeTarea
