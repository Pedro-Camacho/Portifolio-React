import { useState, useEffect } from 'react'
import Perfil from '../Imagens/perfil.jpeg'
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
            <div className='principal-esquerda'>
                <div className='principal-foto-container'>
                    <img src={Perfil} alt="Foto de perfil" />
                </div>
                <h1 className='principal-nome'>Pedro Camacho</h1>
                <p className={`principal-role ${visible ? 'principal-role--visible' : 'principal-role--hidden'}`}>
                    {roles[roleIndex]}
                </p>
            </div>

            <div className='principal-direita'>
                <h2 className='principal-secao-titulo'>Sobre mim</h2>
                <p className='principal-paragrafo'>Meu nome é Pedro Almeida e Camacho, estudante de Engenharia de Software na FIAP. Embora ainda sem experiência profissional, estou focado em desenvolver minhas habilidades. Sou organizado, autodidata e sempre buscando aprender mais.</p>
                <p className='principal-paragrafo'>Como mesário nas eleições de 2022, adquiri experiência em organização e trabalho em equipe. Também mantenho uma rotina ativa, praticando academia, basquete e corrida, o que reforça minha disciplina e foco.</p>
                <p className='principal-paragrafo'>Estou animado com as oportunidades futuras e pronto para aplicar meus conhecimentos em um ambiente profissional.</p>
            </div>
        </main>
    )
}
