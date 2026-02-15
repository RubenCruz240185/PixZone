import "./PieDePagina.css"

function PieDePagina() {
    return (
        <footer className="pie-de-pagina">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Sobre PixZone</h3>
                        <p>Una plataforma dedicada a los amantes de la fotografía.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Enlaces útiles</h3>
                        <ul>
                            <li><a href="#">Política de privacidad</a></li>
                            <li><a href="#">Términos de servicio</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contacto</h3>
                        <p>Email: info@pixzone.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 PixZone. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
export default PieDePagina;