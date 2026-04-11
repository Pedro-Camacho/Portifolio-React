import BolaBasquete from '../Imagens/bolabasquete.svg'
import Biblioteca from '../Imagens/biblioteca.svg'
import Sobre from '../Imagens/interroga.svg'
import Home from '../Imagens/home.svg'
import Email from '../Imagens/email.svg'

import ItemHeader from './ItemHeader'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

export default function Header(){
    return (
        <header className='header'>
            <img src={BolaBasquete} alt="Bola basquete" className='header-logo'/>
            <Link to='/' className='header-link'><ItemHeader icone={Home} item={"Home"}/></Link>
            <Link to='/Sobre' className='header-link'><ItemHeader icone={Sobre} item={"Sobre"}/></Link>
            <Link to='/Projetos' className='header-link'><ItemHeader icone={Biblioteca} item={"Projetos"}/></Link>
            <Link to='/Contato' className='header-link'><ItemHeader icone={Email} item={"Contato"}/></Link>
        </header>
    )
}
