import '../Styles/ItemHeader.css'

export default function ItemHeader({icone, item}){
    return (
        <div className="item-header">
            <img src={icone} alt={item} className="item-header-icon" />
            <h2 className="item-header-text">{item}</h2>
        </div>
    )
}
