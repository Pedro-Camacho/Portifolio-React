export default function ItemHeader({icone , item}){
    return (
        <div className="flex  justify-center items-center ml-6">
            <img src={icone} alt={item} className="w-12" />
            <h2 className="p-0 font-jetBrains text-white">{item}</h2>
        </div>
    )
}