import "./Encabezado.css"

function Encabezado() {
    return (
        <header className="encabezado">
            <div className="container">
                <h1>PixZone</h1>
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Galería</a></li>
                        <li><a href="#">Sobre nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Encabezado;