
//Imports imagens
import BolaBasquete from '../Imagens/bolabasquete.svg'
import Biblioteca from '../Imagens/biblioteca.svg'
import Sobre from '../Imagens/interroga.svg'
import Home from '../Imagens/home.svg'
import Email from '../Imagens/email.svg'

//import Componentes
import ItemHeader from './ItemHeader'
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <header className='lg:flex justify-around  lg:h-28 sm:grid'>
            <img src={BolaBasquete} alt="Bola basquete" className='w-16'/>
            <Link to='/' className='pt-6'><ItemHeader icone={Home} item={"Home"}/></Link>
            <Link to='/Sobre' className='pt-6'><ItemHeader icone={Sobre} item={"Sobre"}/></Link>
            <Link to='/Projetos' className='pt-6'><ItemHeader icone={Biblioteca} item={"Projetos"}/></Link>
            <Link to='/Contato' className='pt-6'><ItemHeader icone={Email} item={"Contato"}/></Link>
        </header>
    )
}