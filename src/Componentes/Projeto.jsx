
export default function Projeto({titulo, imagem, link}){
    return (
        <div className="w-[500px]  bg-container font-jetBrains text-[24px] text-left text-white mb-12">
            <h2>{titulo}</h2>
            <img src={imagem}/>
            <a href={link}>{`Link: ${link}`}</a>            
        </div>
    )
}