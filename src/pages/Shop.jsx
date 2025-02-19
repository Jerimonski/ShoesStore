import axios from "axios"
import { useEffect, useState } from "react"
import LoadingScreen from "../components/LoadingScreen"

function Shop() {
  const [counter, setCounter] = useState(16)
  const [shoes, setShoes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = () => {
    return axios
      .get("https://apimocha.com/shoestradevalue/Shoes")
      .then((response) => setShoes(response.data.sneakers))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleMoreProduct = () => {
    setCounter(counter + 16)
  }

  if (isLoading) return <LoadingScreen />

  return (
    <div className="w-full flex flex-col justify-center py-6">
      <div className=" w-full max-w-[1500px] flex flex-wrap justify-center mx-auto gap-6">
        {shoes &&
          shoes.slice(0, counter).map((shoesData, index) => {
            return (
              <div
                key={index}
                className="w-80 cursor-pointer hover:scale-110 hover:shadow-2xl"
              >
                <img
                  src={shoesData.main_picture_url}
                  alt={shoesData.name}
                  className="bg-light-gray"
                />
                <div className="relative h-32 px-2">
                  <h3 className="font-semibold">{shoesData.name}</h3>
                  <span className="text-dark-gray">{shoesData.gender}</span>
                  <p className="font-semibold py-4 absolute bottom-0">
                    ${String(shoesData.retail_price_cents).slice(0, -2)}
                  </p>
                </div>
              </div>
            )
          })}
      </div>
      <button
        className="my-12 h-8 w-20 mx-auto rounded border-2 border-black bg-black text-white hover:bg-white duration-300 hover:text-black"
        onClick={handleMoreProduct}
      >
        More
      </button>
    </div>
  )
}

export default Shop
