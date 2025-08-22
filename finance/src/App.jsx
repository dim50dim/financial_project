import About from "./components/About"
import Demo from "./components/Demo"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"


function App() {


  return (
    <>
           <div>
            <Navbar/>
            <Home/>
            <About/>
            <Testimonials/>
            <Demo/>
           </div>
    </>
  )
}

export default App
