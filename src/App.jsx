import { Outlet } from "react-router-dom"
import Header from "./components/homepage/Header"
import Footer from "./components/homepage/Footer"

function App() {
  return (
    <div className="bg-fundo">
      <Header/>
      <Outlet/>
      <Footer/>    
    </div>
    
  )
}

export default App
