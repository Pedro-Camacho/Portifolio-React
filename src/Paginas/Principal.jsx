import Perfil from '../Imagens/perfil.jpeg'

export default function Principal(){
    return(
        <main className='sm:flex lg:grid lg:grid-cols-2 h-[100vh] justify-items-center '>
            <div className=' flex justify-center items-center	w-[468px] h-[488px] bg-gradient-to-br from-containerFade to-containerFade2 rounded-padrao border-r-4 border-b-4 border-sombra mt-36'>
                <img src={Perfil} className='rounded-padrao'></img>
            </div>
            <div className='flex flex-col pl-12 pt-7 w-[595px] h-[347px] mt-48 bg-gradient-to-br from-containerFade to-containerFade2 rounded-padrao border-r-4 border-b-4 border-sombra'>
                <h2 className='font-jetBrains text-[48px] text-left text-white'>Olá, eu sou</h2>
                <h2 className='font-jetBrains text-[48px] text-left mb-11 text-rosa'>Pedro Camacho</h2>
                <h3 className='font-jetBrains text-[24px] text-left text-white'>Estudante de Engenharia de Software  na FIAP.</h3>
            </div>
        </main>
    )
}

