import { Routes, Route, Router } from "react-router-dom"
import Home from "./pages/Home"

import './App.css'
import Navbar from "./components/Layout/Navbar"
import Footer from "./components/Layout/Footer"
import About from "./pages/About"
import ScrollToTop from "./components/Layout/ScrollTop"
import Publication from "./pages/Publication"
import Initiative from "./pages/Initiatives"
import Contact from "./pages/Contact"
//import Contact from "./pages/Contact"


function App() {
 

  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Publications" element={<Publication/>} />
      <Route path="/Initiatives" element={<Initiative/>} />
      <Route path="/contact-us" element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
