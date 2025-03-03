import { BrowserRouter } from "react-router-dom"
import RoutesConfig from "../routes/RoutesConfig"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ShoppingCarProvider from "../context/ShoppingCarContext"
import { Toaster } from "sonner"
function Index() {
  return (
    <ShoppingCarProvider>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Navbar />
          <Toaster />
          <RoutesConfig />
          <Footer />
        </BrowserRouter>
      </div>
    </ShoppingCarProvider>
  )
}

export default Index
