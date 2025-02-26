import { useShoppingCar } from "../context/ShoppingCarContext"

function CarShop() {
  const { cart, dispatch } = useShoppingCar()

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty 😢</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="border-b py-2">
              {item.name} - ${item.price.toFixed(2)}
              <img src={item.image} alt="" className="h-32" />
              <p>{item.size}</p>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
                className="ml-4 text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => dispatch({ type: "CLEAR_CART" })}
        className="mt-4 bg-red-500 text-white px-4 py-2"
      >
        Clear Cart
      </button>
    </div>
  )
}

export default CarShop
