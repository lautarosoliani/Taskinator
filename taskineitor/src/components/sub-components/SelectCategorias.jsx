import React, { useState } from "react"

const SelectCategorias = () => {
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
        </>
    )
}

export default SelectCategorias
