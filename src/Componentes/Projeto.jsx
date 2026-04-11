import '../Styles/Projeto.css'

export default function Projeto({titulo, imagem, link}){
    return (
        <div className="projeto-card">
            <h2>{titulo}</h2>
            <img src={imagem}/>
            <a href={link}>{`Link: ${link}`}</a>
        </div>
    )
}
