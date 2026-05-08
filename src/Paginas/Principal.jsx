import { useState, useEffect } from 'react'
import Perfil from '../Imagens/perfil.jpeg'
import GitHubIcon from '../Imagens/github-mark.png'
import LinkedinIcon from '../Imagens/iconmonstr-linkedin-3.svg'
import InstagramIcon from '../Imagens/iconmonstr-instagram-14.svg'
import '../Styles/Principal.css'

const roles = ['Engenheiro de Software', 'Full Stack Developer', 'Data Scientist']

export default function Principal() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false)
            setTimeout(() => {
                setRoleIndex(i => (i + 1) % roles.length)
                setVisible(true)
            }, 350)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <main className='principal'>
            <div className='principal-foto-container'>
                <img src={Perfil} alt="Foto de perfil" />
            </div>

            <p className='principal-greeting'>// Olá, eu sou</p>

            <h1 className='principal-nome'>Pedro Camacho</h1>

            <p className={`principal-role ${visible ? 'principal-role--visible' : 'principal-role--hidden'}`}>
                {roles[roleIndex]}
            </p>

            <p className='principal-descricao'>
                Estudante de Engenharia de Software na FIAP, focado em desenvolvimento full-stack
                e soluções em cloud. Apaixonado por criar experiências digitais impactantes
                e sempre em busca de novos desafios.
            </p>

            <div className='principal-ctas'>
                <a href='#projetos' className='principal-btn principal-btn--primary'>
                    Ver Projetos
                </a>
                <a href='#contato' className='principal-btn principal-btn--secondary'>
                    Entrar em Contato
                </a>
            </div>

            <div className='principal-socials'>
                <a
                    href='https://github.com/Pedro-Camacho'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='GitHub'
                    className='principal-social'
                >
                    <img src={GitHubIcon} alt='' />
                </a>
                <a
                    href='https://www.linkedin.com/in/pedroacamacho/'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='LinkedIn'
                    className='principal-social'
                >
                    <img src={LinkedinIcon} alt='' />
                </a>
                <a
                    href='https://www.instagram.com/pedro.acamacho/'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Instagram'
                    className='principal-social'
                >
                    <img src={InstagramIcon} alt='' />
                </a>
            </div>
        </main>
    )
}
