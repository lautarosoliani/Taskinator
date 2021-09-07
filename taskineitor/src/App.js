import "./styles.css"
import Filtros from "./components/Filtros"
import Header from "./components/Header"
import Resultados from "./components/Resultados"
import "bootstrap"

export default function App() {
    return (
        <>
            <Header />
            <Filtros />
            <Resultados />
        </>
    )
}
