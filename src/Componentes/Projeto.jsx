import '../Styles/Projeto.css'

export default function Projeto({ titulo, imagem, descricao, tags = [], link, github }) {
    return (
        <article className='projeto-card'>
            <div className='projeto-card-img-wrapper'>
                <img src={imagem} alt={titulo} />
                <div className='projeto-card-overlay'>
                    {link && (
                        <a
                            href={link}
                            target='_blank'
                            rel='noreferrer'
                            className='projeto-card-overlay-btn projeto-card-overlay-btn--primary'
                        >
                            Ver Projeto →
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target='_blank'
                            rel='noreferrer'
                            className='projeto-card-overlay-btn projeto-card-overlay-btn--ghost'
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
            <div className='projeto-card-info'>
                <h3 className='projeto-card-titulo'>{titulo}</h3>
                {descricao && <p className='projeto-card-descricao'>{descricao}</p>}
                {tags.length > 0 && (
                    <div className='projeto-card-tags'>
                        {tags.map((t) => (
                            <span key={t} className='projeto-card-tag'>{t}</span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    )
}
