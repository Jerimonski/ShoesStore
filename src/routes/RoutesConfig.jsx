import { Routes, Route } from "react-router-dom"

import { CarShop, Home, Register, Shop } from "../pages"

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
