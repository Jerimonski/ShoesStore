import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import LoadingScreen from "../../../../components/LoadingScreen"
import { useShoppingCar } from "../../../../context/ShoppingCarContext"

function ProductDetails() {
  const { name } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSize, setSelectedSize] = useState(null)
  const { dispatch } = useShoppingCar()

  useEffect(() => {
    axios
      .get("https://apimocha.com/shoestradevalue/Shoes")
      .then((response) => {
        const foundProduct = response.data.sneakers.find(
          (shoe) => shoe.name === name
        )
        setProduct(foundProduct)
      })
      .finally(() => setIsLoading(false))
  }, [name])

  if (isLoading) return <LoadingScreen />
  if (!product)
    return <h1 className="text-center text-3xl">Product not found 😢</h1>

  const productToCart = {
    id: product.id,
    name: product.name,
    image: product.original_picture_url,
    price: product.retail_price_cents / 100,
    size: selectedSize,
  }

  return (
    <div className="max-w-[1600px] mx-auto py-14">
      <section className="grid grid-cols-2 max-xl:flex max-xl:flex-col gap-10">
        <div>
          <img
            src={product.original_picture_url}
            alt={product.name}
            className="w-full py-8"
          />
        </div>
        <article className="flex flex-col">
          <h1 className="text-5xl font-semibold">{product.name}</h1>
          <div className="pt-12 pb-6">
            <h3 className="py-2 text-2xl font-semibold">Description:</h3>
            {product.story_html}
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Sizes:</h3>
            <div className="flex flex-wrap gap-2">
              {product.size_range
                .sort((sizeA, sizeB) => sizeA - sizeB)
                .map((size, index) => (
                  <button
                    key={index}
                    className={`w-14 py-2 border border-black font-semibold ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "hover:bg-black hover:text-white bg-white text-black"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
            </div>
          </div>
          <div className="flex justify-between pt-14 items-center">
            <button
              className="bg-black text-white text-xl px-8 py-5 rounded-md"
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: productToCart })
              }
            >
              Place order
            </button>
            <p className="text-5xl font-semibold">
              {product.retail_price_cents
                ? (product.retail_price_cents / 100).toFixed(2)
                : "N/A"}
              $
            </p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default ProductDetails
