import { Routes, Route } from "react-router-dom"

import CarShop from "../pages/CarShop"
import Home from "../pages/home/Home"
import Register from "../pages/Register"
import Shop from "../pages/Shop"

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/CarShop" element={<CarShop />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  )
}

export default RoutesConfig
