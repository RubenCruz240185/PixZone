import "./PieDePagina.css"

function PieDePagina() {
    return (
        <footer className="pie-de-pagina">
            <div className="container">
                <div className="footer-split">
                    <div className="footer-left">
                        <h3>Sobre PixZone</h3>
                        <p>Una plataforma dedicada a los amantes de la fotografía. Comparte, descubre y conecta con creadores visuales.</p>
                    </div>

                    <div className="footer-right">
                        <div className="socials">
                            <a href="#" aria-label="Facebook" className="social">f</a>
                            <a href="#" aria-label="Instagram" className="social">ig</a>
                            <a href="#" aria-label="Twitter" className="social">t</a>
                            <a href="#" aria-label="TikTok" className="social">tt</a>
                            <a href="#" aria-label="YouTube" className="social">yt</a>
                            <a href="#" aria-label="LinkedIn" className="social">in</a>
                        </div>

                        <div className="right-links">
                            <a href="#">Terms of Service</a>
                            <a href="#">General Terms and Conditions</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Cookie Policy</a>
                            <a href="#">Imprint</a>
                        </div>

                        <div className="footer-copy">
                            <p>&copy; 2026 PixZone.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default PieDePagina;