import { BrowserRouter } from "react-router-dom"
import RoutesConfig from "../routes/RoutesConfig"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ShoppingCarProvider from "../context/ShoppingCarContext"

function Index() {
  return (
    <ShoppingCarProvider>
      <BrowserRouter>
        <Navbar />
        <RoutesConfig />
        <Footer />
      </BrowserRouter>
    </ShoppingCarProvider>
  )
}

export default Index
