import EdgeComputing from '../Imagens/EdgeComputing.png'
import Cascudo from '../Imagens/cascudo.png'
import Mahindra from '../Imagens/mahindra.jpg'
import Organo from '../Imagens/Organo.png'
import FireSentinel from '../Imagens/FireSentinel.png'

import Projeto from '../Componentes/Projeto'
import '../Styles/Projetos.css'

const projetos = [
    {
        titulo: 'FireSentinel',
        imagem: FireSentinel,
        descricao: 'Sistema de detecção e monitoramento de incêndios em tempo real.',
        tags: ['React', 'IoT', 'Python'],
        link: 'https://fire-sentinel.vercel.app/',
        github: 'https://github.com/Pedro-Camacho/FireSentinel',
    },
    {
        titulo: 'Organo',
        imagem: Organo,
        descricao: 'Aplicação para organização de times e colaboradores.',
        tags: ['React', 'CSS', 'JavaScript'],
        link: 'https://oraganizacao.vercel.app/',
    },
    {
        titulo: 'Edge Challenge',
        imagem: EdgeComputing,
        descricao: 'Solução de Edge Computing para processamento distribuído.',
        tags: ['IoT', 'Python', 'Edge'],
        link: 'https://github.com/Pedro-Camacho/Challenge-Edge-Computing',
    },
    {
        titulo: 'Cascudo',
        imagem: Cascudo,
        descricao: 'Projeto Blue Code focado em Edge Computing e sensores.',
        tags: ['Arduino', 'C++', 'IoT'],
        link: 'https://github.com/Pedro-Camacho/Blue-Code-Cascudo-gs-Edge-Computing',
    },
    {
        titulo: 'E-teen Python',
        imagem: Mahindra,
        descricao: 'Challenge desenvolvido em Python para Mahindra Racing.',
        tags: ['Python', 'Data Analysis'],
        link: 'https://github.com/Pedro-Camacho/Challenge-python',
    },
]

export default function Projetos() {
    return (
        <div className='projetos'>
            <p className='secao-label'>Meu trabalho</p>
            <h2 className='projetos-titulo'>Projetos</h2>

            <div className='projetos-grid'>
                {projetos.map((p, i) => (
                    <Projeto
                        key={i}
                        titulo={p.titulo}
                        imagem={p.imagem}
                        descricao={p.descricao}
                        tags={p.tags}
                        link={p.link}
                        github={p.github}
                    />
                ))}
            </div>
        </div>
    )
}
