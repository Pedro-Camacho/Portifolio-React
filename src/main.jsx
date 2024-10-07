import ReactDom from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'

//import paginas
import Principal from './Paginas/Principal.jsx'
import Sobre from './Paginas/Sobre.jsx'
import Projetos from './Paginas/Projetos.jsx'
import Contato from './Paginas/Contato.jsx'

const  router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {index:true, element:<Principal/>},
      {path:'/Sobre',element:<Sobre/>},
      {path:'/projetos', element:<Projetos/>},
      {path:'/Contato', element:<Contato/>}
    ]
  }
])
ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
