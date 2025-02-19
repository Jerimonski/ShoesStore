import React, { createContext, useState } from "react"

function ShoppingCarProvider({ children }) {
  const CartContext = createContext(null)
  const [car, setCart] = useState([])
  return (
    <CartContext.Provider value={[car, setCart]}>
      {children}
    </CartContext.Provider>
  )
}

export default ShoppingCarProvider
