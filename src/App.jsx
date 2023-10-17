import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header"
import FixedSocialIcons from "./components/FixedSocialIcons/FixedSocialIcons"
import CustomLoader from "./components/CustomLoader/CustomLoader"

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomLoader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FixedSocialIcons />
      </BrowserRouter>
    </>
  )
}

export default App
