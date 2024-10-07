import Habilidades from '../Componentes/Habilidades'
import Css from '../Imagens/css-3.svg'
import Html from '../Imagens/html-1.svg'
import Python from '../Imagens/python-4.svg'
import ImagemReact from '../Imagens/react-2.svg'

export default function Sobre(){
    return (
        <div className='h-screen'>
            <div className="mt-[40px]  w-full lg:w-[1089px] lg:ml-[400px]">
                <p className="font-jetBrains text-[24px] text-left text-white text-wrap">Meu nome é Pedro Almeida e Camacho, estudante de Engenharia de Software na FIAP. Embora ainda sem experiência profissional, estou focado em desenvolver minhas habilidades. Sou organizado, autodidata e sempre buscando aprender mais.</p>
                <br />
                <p className="font-jetBrains text-[24px] text-left text-white">Como mesário nas eleições de 2022, adquiri experiência em organização e trabalho em equipe. Também mantenho uma rotina ativa, praticando academia, basquete e corrida, o que reforça minha disciplina e foco.</p>
                <br />
                <p className="font-jetBrains text-[24px] text-left text-white">Estou animado com as oportunidades futuras e pronto para aplicar meus conhecimentos em um ambiente profissional.</p>
                <br/>
            </div>
            <h2 className='font-jetBrains text-[36px] text-left text-white lg:ml-[400px]'>Principais</h2>
            <h2 className='font-jetBrains text-[36px] text-left text-white lg:ml-[400px]'>Habilidades:</h2>
            <div className='flex flex-col lg:flex-row ml-[60px] lg:ml-[400px]  gap-[70px] pt-[30px] pb-[30px]'>
               <Habilidades nome="Html" imagem={Html} nivel="Avançado"/> 
               <Habilidades nome="Css" imagem={Css} nivel="Avançado"/> 
               <Habilidades nome="Python" imagem={Python} nivel="Basico"/> 
               <Habilidades nome="React" imagem={ImagemReact} nivel="Basico"/> 
            </div>
        </div>
        
    )
}