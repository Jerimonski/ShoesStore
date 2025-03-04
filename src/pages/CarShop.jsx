import { useShoppingCar } from "../context/ShoppingCarContext"

function CarShop() {
  const { cart, dispatch } = useShoppingCar()

  return (
    <div className="max-w-[1600px] mx-auto py-12">
      <section>
        {cart.length === 0 ? (
          <article className="text-center">
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            <p>Your cart is empty 😢</p>
          </article>
        ) : (
          <>
            <button
              onClick={() => dispatch({ type: "CLEAR_CART" })}
              className="my-2 px-2 py-1 rounded bg-red-500 hover:bg-red-600 text-white duration-200"
            >
              Clear Cart
            </button>

            <article className="grid grid-cols-2">
              <div className="h-full space-y-2">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="border border-2 border-black rounded flex px-2 w-[350px] items-center"
                  >
                    <img src={item.image} alt={item.name} className="h-28" />
                    <div>
                      <p className="font-semibold text-md">{item.name}</p>
                      <p>
                        <span className="font-semibold">size:</span> {item.size}
                      </p>
                      <div className="relative">
                        <span className="font-semibold">price:</span> $
                        {item.price.toFixed(2)}
                        <button
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: item.id,
                            })
                          }
                          className="absolute right-0 text-red-500 hover:text-red-800 duration-200"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-smoke-gray h-max mx-4 px-4">
                <h3 className="text-center text-2xl font-semibold">
                  Order summary
                </h3>
                <p className="font-semibold text-xl flex justify-between py-4">
                  Total
                  <span>
                    $
                    {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                  </span>
                </p>

                <button className="bg-black text-white rounded px-4 py-2 w-full hover:scale-105 duration-200">
                  Process To Checkout
                </button>
              </div>
            </article>
          </>
        )}
      </section>
    </div>
  )
}

export default CarShop
