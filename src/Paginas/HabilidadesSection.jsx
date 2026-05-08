import { useEffect, useRef, useState } from 'react'

import Html from '../Imagens/html-1.svg'
import Css from '../Imagens/css-3.svg'
import Js from '../Imagens/logo-javascript.svg'
import Python from '../Imagens/python-new.svg'
import ImagemReact from '../Imagens/react-2.svg'
import Java from '../Imagens/java.svg'
import CSharp from '../Imagens/csharp.svg'
import TypeScript from '../Imagens/typescript.svg'
import Azure from '../Imagens/azure.svg'

import '../Styles/HabilidadesSection.css'

const categorias = [
    {
        titulo: 'Frontend',
        skills: [
            { nome: 'HTML', imagem: Html, nivel: 95 },
            { nome: 'CSS', imagem: Css, nivel: 90 },
            { nome: 'JavaScript', imagem: Js, nivel: 85 },
            { nome: 'React', imagem: ImagemReact, nivel: 80 },
            { nome: 'TypeScript', imagem: TypeScript, nivel: 70 },
        ],
    },
    {
        titulo: 'Backend',
        skills: [
            { nome: 'Python', imagem: Python, nivel: 75 },
            { nome: 'Java', imagem: Java, nivel: 70 },
            { nome: 'C#', imagem: CSharp, nivel: 75 },
        ],
    },
    {
        titulo: 'Ferramentas',
        skills: [
            { nome: 'Azure', imagem: Azure, nivel: 65 },
            { nome: 'Git', imagem: null, nivel: 85 },
        ],
    },
]

export default function HabilidadesSection() {
    const sectionRef = useRef(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const el = sectionRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <div className='hab-section' ref={sectionRef}>
            <p className='secao-label'>O que eu sei</p>
            <h2 className='hab-titulo'>Habilidades</h2>

            <div className='hab-categorias'>
                {categorias.map((cat) => (
                    <div className='hab-categoria' key={cat.titulo}>
                        <h3 className='hab-categoria-titulo'>{cat.titulo}</h3>
                        <div className='hab-skills'>
                            {cat.skills.map((skill) => (
                                <div className='hab-skill' key={skill.nome}>
                                    <div className='hab-skill-icone'>
                                        {skill.imagem ? (
                                            <img src={skill.imagem} alt={skill.nome} />
                                        ) : (
                                            <span className='hab-skill-fallback'>
                                                {skill.nome.slice(0, 3).toUpperCase()}
                                            </span>
                                        )}
                                    </div>
                                    <div className='hab-skill-info'>
                                        <div className='hab-skill-row'>
                                            <span className='hab-skill-nome'>{skill.nome}</span>
                                            <span className='hab-skill-nivel'>{skill.nivel}%</span>
                                        </div>
                                        <div className='hab-skill-track'>
                                            <div
                                                className='hab-skill-fill'
                                                style={{ width: inView ? `${skill.nivel}%` : '0%' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
