import Html from '../Imagens/html-1.svg'
import Css from '../Imagens/css-3.svg'
import Python from '../Imagens/python-new.svg'
import ImagemReact from '../Imagens/react-2.svg'
import Java from '../Imagens/java.svg'
import CSharp from '../Imagens/csharp.svg'
import TypeScript from '../Imagens/typescript.svg'
import Azure from '../Imagens/azure.svg'
import '../Styles/HabilidadesSection.css'

const skills = [
    { nome: 'HTML', imagem: Html, nivel: 100 },
    { nome: 'CSS', imagem: Css, nivel: 80 },
    { nome: 'Python', imagem: Python, nivel: 40 },
    { nome: 'React', imagem: ImagemReact, nivel: 70 },
    { nome: 'Java', imagem: Java, nivel: 60 },
    { nome: 'C#', imagem: CSharp, nivel: 70 },
    { nome: 'TypeScript', imagem: TypeScript, nivel: 50 },
    { nome: 'Azure', imagem: Azure, nivel: 100 },
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
                            <progress value={skill.nivel} max="100" ></progress>    
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
