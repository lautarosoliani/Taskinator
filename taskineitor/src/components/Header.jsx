import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            <div className="contenedor-header">
                <h1 className="flex-start">Taskinator</h1>
                <div className="contenedor-placeholder">
                    <input placeholder="Your new task here!" />
                </div>
            </div>
        </div>
    )
}

export default Header
