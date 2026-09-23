import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"

import './App.css'
import Navbar from "./components/Layout/Navbar"
import Footer from "./components/Layout/Footer"
import About from "./pages/About"
import ScrollToTop from "./components/Layout/ScrollTop"
import Publication from "./pages/Publication"
import Initiative from "./pages/Initiatives"
import Contact from "./pages/Contact"
import OrganizationJsonLd from "./components/SEO/OrganizationJsonLd"
import NotFound from "./pages/NotFound"

//import Contact from "./pages/Contact"


function App() {
 

  return (
    <>
    <OrganizationJsonLd/>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/publications" element={<Publication/>} />
      <Route path="/initiatives" element={<Initiative/>} />
      <Route path="/contact-us" element={<Contact/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
