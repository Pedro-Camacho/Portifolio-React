import { useState } from 'react'

import EdgeComputing from '../Imagens/EdgeComputing.png'
import Cascudo from '../Imagens/cascudo.png'
import Mahindra from '../Imagens/mahindra.jpg'
import Organo from '../Imagens/Organo.png'
import FireSentinel from '../Imagens/FireSentinel.png'

import Projeto from '../Componentes/Projeto'
import '../Styles/Projetos.css'

const projetos = [
    { titulo: "FireSentinel", imagem: FireSentinel, link: 'https://fire-sentinel.vercel.app/', github: 'https://github.com/Pedro-Camacho/FireSentinel' },
    { titulo: "Organo", imagem: Organo, link: 'https://oraganizacao.vercel.app/' },
    { titulo: "Edge Challenge", imagem: EdgeComputing, link: 'https://github.com/Pedro-Camacho/Challenge-Edge-Computing' },
    { titulo: "Cascudo", imagem: Cascudo, link: 'https://github.com/Pedro-Camacho/Blue-Code-Cascudo-gs-Edge-Computing' },
    { titulo: "E-teen Python", imagem: Mahindra, link: 'https://github.com/Pedro-Camacho/Challenge-python' },
]

export default function Projetos() {
    const [current, setCurrent] = useState(0)
    const total = projetos.length

    const prev = () => setCurrent((c) => (c - 1 + total) % total)
    const next = () => setCurrent((c) => (c + 1) % total)

    return (
        <div className='projetos'>
            <h2 className='projetos-titulo'>Projetos</h2>

            <div className='carrossel'>
                <button className='carrossel-btn' onClick={prev} aria-label="Anterior">&#8592;</button>

                <div className='carrossel-viewport'>
                    <div
                        className='carrossel-track'
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {projetos.map((p, i) => (
                            <div className='carrossel-item' key={i}>
                                <Projeto titulo={p.titulo} imagem={p.imagem} link={p.link} github={p.github} />
                            </div>
                        ))}
                    </div>
                </div>

                <button className='carrossel-btn' onClick={next} aria-label="Próximo">&#8594;</button>
            </div>

            <div className='carrossel-dots'>
                {projetos.map((_, i) => (
                    <button
                        key={i}
                        className={`carrossel-dot ${i === current ? 'carrossel-dot-active' : ''}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Ir para projeto ${i + 1}`}
                    />
                ))}
            </div>

            <p className='carrossel-counter'>{current + 1} / {total}</p>
        </div>
    )
}
