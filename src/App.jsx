import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
import FixedSocialIcons from "./components/FixedSocialIcons/FixedSocialIcons"
import CustomLoader from "./components/CustomLoader/CustomLoader"
import Explore from "./pages/Explore/Explore"
import Footer from "./components/Footer/Footer"
import Projects from "./pages/Projects/Projects"
import SmoothScroll from "./components/SmoothScroll"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Expertise from "./pages/Expertise/Expertise"

function App() {
  return (
    <>
      <BrowserRouter>
        <SmoothScroll>
          <CustomLoader />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <FixedSocialIcons />
          <Footer />
        </SmoothScroll>
      </BrowserRouter>
    </>
  )
}

export default App
