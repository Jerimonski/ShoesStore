import { BrowserRouter } from "react-router-dom"
import RoutesConfig from "../routes/RoutesConfig"
import { Navbar, Footer } from "../components"
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
