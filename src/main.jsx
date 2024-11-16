import {createBrowserRouter, RouterProvider}from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Home from './pages/Homepage/Home.jsx'
import PageNotFound from './pages/Homepage/PageNotFound.jsx'
import Contact from './pages/Homepage/Contact.jsx'
import HomeTop from './components/homepage/HomeTop.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {index: true, element: <Home/>},
      {path: "/Dashboard", element: <Dashboard/>},
      {path: "/Contact", element: <Contact/>},
      {path: "*", element: <PageNotFound/>}
    ]
  }


])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
