import Linkedin from '../Imagens/iconmonstr-linkedin-3.svg'
import Instagram from '../Imagens/iconmonstr-instagram-14.svg'
import GitHub from '../Imagens/github-mark.png'
import '../Styles/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer-copy">© {new Date().getFullYear()} Pedro Camacho</p>
            <div className="footer-links">
                <a href='https://www.instagram.com/pedro.acamacho/' className="footer-link" target="_blank" rel="noreferrer">
                    <img className='footer-icon' src={Instagram} alt="Instagram" />
                    <span>Instagram</span>
                </a>
                <a href="https://github.com/Pedro-Camacho" className="footer-link" target="_blank" rel="noreferrer">
                    <img className='footer-icon' src={GitHub} alt="GitHub" />
                    <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/pedroacamacho/" className="footer-link" target="_blank" rel="noreferrer">
                    <img className='footer-icon' src={Linkedin} alt="LinkedIn" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </footer>
    )
}
