import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
import FixedSocialIcons from "./components/FixedSocialIcons/FixedSocialIcons"
import CustomLoader from "./components/CustomLoader/CustomLoader"
import Explore from "./pages/Explore/Explore"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomLoader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <FixedSocialIcons />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
