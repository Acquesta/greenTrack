import {createBrowserRouter, RouterProvider}from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './Dashboard.jsx'
import Home from './pages/Homepage/Home.jsx'
import PageNotFound from './pages/Homepage/PageNotFound.jsx'
import Contact from './pages/Homepage/Contact.jsx'

import HomeDashboard from './components/dashboard/HomeDashboard.jsx'
import TempoReal from './pages/Dashboard/TempoReal.jsx'
import Eficiencia from './pages/Dashboard/Eficiencia.jsx'
import Manutencao from './pages/Dashboard/Manutencao.jsx'
import Previsao from './pages/Dashboard/Previsao.jsx'
import Sustentabilidade from './pages/Dashboard/Susutentabilidade.jsx'
import Analise from './pages/Dashboard/Analise.jsx'
import Login from './pages/Homepage/Login.jsx'
import Cadastro from './pages/Homepage/Cadastro.jsx'
import RedefinirSenha from './pages/Homepage/RedefinirSenha.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {index: true, element: <Home/>},
      {path: "/Contact", element: <Contact/>},
      {path: "/Login", element: <Login/>},
      {path: "/Cadastro", element: <Cadastro/>},
      {path: "/RedefinirSenha", element: <RedefinirSenha/>},
      {path: "*", element: <PageNotFound/>}
    ]
  },
  {
    path: '/Dashboard',
    element: <Dashboard />,
    children: [
      { index: true, element: <HomeDashboard /> }, 
      { path: 'home', element: <HomeDashboard /> }, 
      { path: 'tempoReal', element: <TempoReal /> }, 
      { path: 'eficiencia', element: <Eficiencia /> }, 
      { path: 'manutencao', element: <Manutencao /> }, 
      { path: 'analise', element: <Analise /> }, 
      { path: 'previsao', element: <Previsao /> }, 
      { path: 'sustentabilidade', element: <Sustentabilidade /> }, 
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
