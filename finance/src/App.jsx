import About from "./components/About"
import Demo from "./components/Demo"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"
import Work from "./components/Work"


function App() {


  return (
    <>
           <div>
            <Navbar/>
            <Home/>
            <About/>
            <Testimonials/>
            <Demo/>
            <Footer/>
            <Work/>
           </div>
    </>
  )
}

export default App
