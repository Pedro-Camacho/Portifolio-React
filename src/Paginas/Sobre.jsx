import Habilidades from '../Componentes/Habilidades'
import Css from '../Imagens/css-3.svg'
import Html from '../Imagens/html-1.svg'
import Python from '../Imagens/python-4.svg'
import ImagemReact from '../Imagens/react-2.svg'
import '../Styles/Sobre.css'

export default function Sobre(){
    return (
        <div className='sobre'>
            <div className="sobre-texto">
                <p className="sobre-paragrafo">Meu nome é Pedro Almeida e Camacho, estudante de Engenharia de Software na FIAP. Embora ainda sem experiência profissional, estou focado em desenvolver minhas habilidades. Sou organizado, autodidata e sempre buscando aprender mais.</p>
                <br />
                <p className="sobre-paragrafo">Como mesário nas eleições de 2022, adquiri experiência em organização e trabalho em equipe. Também mantenho uma rotina ativa, praticando academia, basquete e corrida, o que reforça minha disciplina e foco.</p>
                <br />
                <p className="sobre-paragrafo">Estou animado com as oportunidades futuras e pronto para aplicar meus conhecimentos em um ambiente profissional.</p>
                <br/>
            </div>
            <h2 className='sobre-titulo'>Principais</h2>
            <h2 className='sobre-titulo'>Habilidades:</h2>
            <div className='sobre-habilidades'>
               <Habilidades nome="Html" imagem={Html} nivel="Avançado"/>
               <Habilidades nome="Css" imagem={Css} nivel="Avançado"/>
               <Habilidades nome="Python" imagem={Python} nivel="Básico"/>
               <Habilidades nome="React" imagem={ImagemReact} nivel="Básico"/>
            </div>
        </div>
    )
}
