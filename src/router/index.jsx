import { BrowserRouter } from "react-router-dom"
import RoutesConfig from "../routes/RoutesConfig"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesConfig />
      <Footer />
    </BrowserRouter>
  )
}

export default Index
