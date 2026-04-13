import './Styles/App.css'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Principal from './Paginas/Principal.jsx'
import HabilidadesSection from './Paginas/HabilidadesSection.jsx'
import Projetos from './Paginas/Projetos.jsx'
import Contato from './Paginas/Contato.jsx'

function App() {
  return (
    <div className='app'>
      <Header />
      <section id="home"><Principal /></section>
      <section id="habilidades"><HabilidadesSection /></section>
      <section id="projetos"><Projetos /></section>
      <section id="contato"><Contato /></section>
      <Footer />
    </div>
  )
}

export default App
