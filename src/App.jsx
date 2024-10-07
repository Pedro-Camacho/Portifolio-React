import {Outlet} from 'react-router-dom'
import './App.css'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
function App() {
  

  return (
    <div className='bg-gradient-to-br from-preto to-cinza'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
