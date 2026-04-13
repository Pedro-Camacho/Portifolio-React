import BolaBasquete from '../Imagens/bolabasquete.svg'
import Biblioteca from '../Imagens/biblioteca.svg'
import HabilidadesIcon from '../Imagens/interroga.svg'
import Home from '../Imagens/home.svg'
import Email from '../Imagens/email.svg'

import ItemHeader from './ItemHeader'
import '../Styles/Header.css'

export default function Header() {
    return (
        <header className='header'>
            <a href="#home" className='header-logo-link'>
                <img src={BolaBasquete} alt="Logo" className='header-logo' />
            </a>
            <nav className='header-nav'>
                <a href="#home" className='header-link'><ItemHeader icone={Home} item={"Home"} /></a>
                <a href="#habilidades" className='header-link'><ItemHeader icone={HabilidadesIcon} item={"Habilidades"} /></a>
                <a href="#projetos" className='header-link'><ItemHeader icone={Biblioteca} item={"Projetos"} /></a>
                <a href="#contato" className='header-link'><ItemHeader icone={Email} item={"Contato"} /></a>
            </nav>
        </header>
    )
}
