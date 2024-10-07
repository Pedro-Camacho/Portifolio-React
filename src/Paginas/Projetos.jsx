
import EdgeComputing from '../Imagens/EdgeComputing.png'
import Cascudo from '../Imagens/cascudo.png'
import Mahindra from '../Imagens/mahindra.jpg'
import Organo from "../Imagens/Organo.png"

import Projeto from '../Componentes/Projeto'

export default function Projetos(){
    return (
        <div className='flex  flex-col  items-center'>
            <Projeto titulo="Organo" imagem={Organo} link='https://oraganizacao.vercel.app/'/>
            <Projeto titulo="Edge Challenge" imagem={EdgeComputing} link='https://github.com/Pedro-Camacho/Challenge-Edge-Computing'/>
            <Projeto titulo="Cascudo" imagem={Cascudo} link='https://github.com/Pedro-Camacho/Blue-Code-Cascudo-gs-Edge-Computing'/>
            <Projeto titulo="E-teen python" imagem={Mahindra} link='https://github.com/Pedro-Camacho/Challenge-python'/>            
        </div>
    )
}
