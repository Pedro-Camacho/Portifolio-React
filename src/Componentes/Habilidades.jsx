export default function Habilidades({nome, imagem, nivel}){
    return (
        <div className="w-[180px] h-[250px] bg-container rounded-padrao grid justify-center pt-[10px]">
            <img src={imagem} alt={nome} className="w-[100px]"/>
            <h2 className="m-0 p-0 font-jetBrains text-[24px] text-left text-white">{nome}</h2>
            <h3 className="mt-[-10px] font-jetBrains text-[24px] text-left text-white">{nivel}</h3>
        </div>
    )
}