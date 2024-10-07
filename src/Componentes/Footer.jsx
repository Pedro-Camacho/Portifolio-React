
import Instagram from '../Imagens/iconMonstr-instagram-14.svg'
import Linkedin from '../Imagens/iconmonstr-linkedin-3.svg'
import GitHub from '../Imagens/github-mark.png'
export default  function Footer(){
    return(
        <footer className="bg-gradient-to-br from-preto to-cinza w-full h-[100px] flex justify-center items-center gap-12 pt-6 pb-6">
            <a href='https://www.instagram.com/pedro.acamacho/'><img className='w-20'src={Instagram}/></a>
            <a href="https://github.com/Pedro-Camacho"><img className='w-20'src={GitHub}/></a>
            <a href="https://www.linkedin.com/in/pedroacamacho/"><img className='w-20'src={Linkedin}/></a>
        </footer>
    )
}