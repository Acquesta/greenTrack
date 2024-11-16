import {createBrowserRouter, RouterProvider}from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './Dashboard.jsx'
import Home from './pages/Homepage/Home.jsx'
import PageNotFound from './pages/Homepage/PageNotFound.jsx'
import Contact from './pages/Homepage/Contact.jsx'

import HomeTop from './components/homepage/HomeTop.jsx'

import HomeDashboard from './components/dashboard/HomeDashboard.jsx'
import TempoReal from './pages/Dashboard/TempoReal.jsx'
import Eficiencia from './pages/Dashboard/Eficiencia.jsx'
import Manutencao from './pages/Dashboard/Manutencao.jsx'
import Previsao from './pages/Dashboard/Previsao.jsx'
import Sustentabilidade from './pages/Dashboard/Susutentabilidade.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {index: true, element: <Home/>},
      {path: "/Contact", element: <Contact/>},
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
