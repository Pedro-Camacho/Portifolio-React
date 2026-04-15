import '../Styles/Habilidades.css'

export default function Habilidades({nome, imagem, nivel}){
    return (
        <div className="habilidades-card">
            <img src={imagem} alt={nome} className="habilidades-img"/>
            <h2 className="habilidades-nome">{nome}</h2>
            <h3 className="habilidades-nivel">{nivel}</h3>
           
        </div>
    )
}
