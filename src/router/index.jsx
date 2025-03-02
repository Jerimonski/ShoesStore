import { BrowserRouter } from "react-router-dom"
import RoutesConfig from "../routes/RoutesConfig"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ShoppingCarProvider from "../context/ShoppingCarContext"
import { Toaster } from "sonner"
function Index() {
  return (
    <ShoppingCarProvider>
      <BrowserRouter>
        <Navbar />
        <Toaster />
        <RoutesConfig />
        <Footer />
      </BrowserRouter>
    </ShoppingCarProvider>
  )
}

export default Index
