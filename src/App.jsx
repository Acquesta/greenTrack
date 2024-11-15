import { Outlet } from "react-router-dom"
import Header from "./components/homepage/Header"
import Dashboard from "./pages/Dashboard"
import Footer from "./components/homepage/Footer"

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>    
    </>
    
  )
}

export default App
