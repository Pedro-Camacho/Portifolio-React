import Perfil from '../Imagens/perfil.jpeg'
import '../Styles/Principal.css'

export default function Principal(){
    return(
        <main className='principal'>
            <div className='principal-foto-container'>
                <img src={Perfil} alt="Foto de perfil"/>
            </div>
            <div className='principal-info'>
                <h2 className='principal-titulo'>Olá, eu sou</h2>
                <h2 className='principal-nome'>Pedro Camacho</h2>
                <h3 className='principal-subtitulo'>Estudante de Engenharia de Software na FIAP.</h3>
            </div>
        </main>
    )
}
