import Linkedin from '../Imagens/iconmonstr-linkedin-3.svg'
import Instagram from '../Imagens/iconmonstr-instagram-14.svg'
import GitHub from '../Imagens/github-mark.png'
import '../Styles/Footer.css'

export default function Footer(){
    return(
        <footer className="footer">
            <a href='https://www.instagram.com/pedro.acamacho/'><img className='footer-icon' src={Instagram}/></a>
            <a href="https://github.com/Pedro-Camacho"><img className='footer-icon' src={GitHub}/></a>
            <a href="https://www.linkedin.com/in/pedroacamacho/"><img className='footer-icon' src={Linkedin}/></a>
        </footer>
    )
}
