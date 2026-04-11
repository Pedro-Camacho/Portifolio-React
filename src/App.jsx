import {Outlet} from 'react-router-dom'
import './Styles/App.css'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'

function App() {
  return (
    <div className='app'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
