import "./PieDePagina.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faXTwitter, faTiktok, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function PieDePagina() {
    return (
        <footer className="pie-de-pagina">
            <div className="container">
                <div className="footer-split">
                    <div className="footer-left">
                        <h3>PixZone</h3>
                        <p>Una plataforma dedicada a los amantes de la fotografía. Comparte, descubre y conecta con creadores visuales.</p>
                    </div>

                    <div className="footer-right">
                        <div className="socials">
                            <a href="#" aria-label="Facebook" className="social">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" aria-label="Instagram" className="social">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#" aria-label="Twitter" className="social">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>
                            <a href="#" aria-label="TikTok" className="social">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                            <a href="#" aria-label="YouTube" className="social">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href="#" aria-label="LinkedIn" className="social">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>

                        <div className="right-links">
                            <a href="#">Terminos de Servicio</a>
                            <a href="#">Terminos y Condiciones</a>
                            <a href="#">Politicas de Privacidad</a>
                            <a href="#">Cookies</a>
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