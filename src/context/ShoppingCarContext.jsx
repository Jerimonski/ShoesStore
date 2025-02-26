import { createContext, useReducer, useContext } from "react"

const initialState = {
  cart: [],
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }
    case "CLEAR_CART":
      return { ...state, cart: [] }
    default:
      return state
  }
}

const CartContext = createContext(null)

function ShoppingCarProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
export default ShoppingCarProvider

export function useShoppingCar() {
  return useContext(CartContext)
}
