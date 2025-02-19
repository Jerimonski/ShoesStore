import { BrowserRouter } from "react-router-dom"
import RoutesConfig from "../routes/RoutesConfig"
import { Navbar, Footer } from "../components"
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
