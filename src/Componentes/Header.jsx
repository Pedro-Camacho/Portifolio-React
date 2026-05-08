import { useEffect, useState } from 'react'
import '../Styles/Header.css'

const NAV = [
    { id: 'home', label: 'Home' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' },
]

export default function Header() {
    const [active, setActive] = useState('home')

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id)
                })
            },
            { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
        )
        NAV.forEach(({ id }) => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })
        return () => observer.disconnect()
    }, [])

    return (
        <header className='header'>
            <a href="#home" className='header-logo'>
                PC<span>.</span>
            </a>
            <nav className='header-nav'>
                {NAV.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={`header-link ${active === id ? 'header-link--active' : ''}`}
                    >
                        {label}
                    </a>
                ))}
            </nav>
        </header>
    )
}
