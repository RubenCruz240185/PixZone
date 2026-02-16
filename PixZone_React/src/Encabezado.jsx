import "./Encabezado.css"

function Encabezado({ onNavigate }) {
    const handleClick = (e, seccion) => {
        e.preventDefault()
        onNavigate(seccion)
    }

    return (
        <header className="encabezado">
            <div className="container">
                <h1>PixZone</h1>
                <nav>
                    <ul>
                        <li><a href="#" onClick={(e) => handleClick(e, "inicio")}>Inicio</a></li>
                        <li><a href="#" onClick={(e) => handleClick(e, "galeria")}>Destacadas</a></li>
                        <li><a href="#" onClick={(e) => handleClick(e, "productos")}>Productos</a></li>
                        <li><a href="#" onClick={(e) => handleClick(e, "sobre")}>Sobre Nosotros</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Encabezado;