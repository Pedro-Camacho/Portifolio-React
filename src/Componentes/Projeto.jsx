import '../Styles/Projeto.css'

export default function Projeto({ titulo, imagem, link, github }) {
    return (
        <div className="projeto-card">
            <div className="projeto-card-img-wrapper">
                <img src={imagem} alt={titulo} />
            </div>
            <div className="projeto-card-info">
                <h2>{titulo}</h2>
                <div className="projeto-card-links">
                    <a href={link} target="_blank" rel="noreferrer">Ver projeto →</a>
                    {github && (
                        <a href={github} target="_blank" rel="noreferrer">GitHub →</a>
                    )}
                </div>
            </div>
        </div>
    )
}
