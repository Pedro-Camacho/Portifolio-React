import Html from '../Imagens/html-1.svg'
import Css from '../Imagens/css-3.svg'
import Python from '../Imagens/python-4.svg'
import ImagemReact from '../Imagens/react-2.svg'
import '../Styles/HabilidadesSection.css'

const skills = [
    { nome: 'HTML', imagem: Html },
    { nome: 'CSS', imagem: Css },
    { nome: 'Python', imagem: Python },
    { nome: 'React', imagem: ImagemReact },
]

export default function HabilidadesSection() {
    return (
        <div className='hab-section'>
            <h2 className='hab-titulo'>Habilidades</h2>
            <div className='hab-carrossel-wrapper'>
                <div className='hab-carrossel-track'>
                    {[...skills, ...skills].map((skill, i) => (
                        <div className='hab-skill-item' key={i}>
                            <img src={skill.imagem} alt={skill.nome} />
                            <span>{skill.nome}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
