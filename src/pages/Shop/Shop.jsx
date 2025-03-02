import axios from "axios"
import { useEffect, useState } from "react"
import LoadingScreen from "../../components/LoadingScreen"
import { Link } from "react-router-dom"

function Shop() {
  const [counter, setCounter] = useState(16)
  const [shoes, setShoes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState("")

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
    <div className="max-w-[1400px] mx-auto flex flex-col justify-center py-6">
      <h1 className="text-center text-5xl font-semibold">Search Shoes</h1>
      <section className="items-center flex">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          color="blue-200"
          placeholder="Air Jordan 1"
          className="border-2 rounded mx-auto my-12 px-2 py-1 focus-within:border-black transition duration-300"
        />
      </section>
      <section className="w-full flex flex-wrap justify-center gap-6">
        {shoes &&
          shoes
            .filter((shoesData) => {
              return shoesData.name.toLowerCase().includes(search.toLowerCase())
            })
            .slice(0, counter)
            .map((shoesData, index) => {
              return (
                <div
                  key={index}
                  className="w-80 cursor-pointer hover:scale-110 hover:shadow-2xl"
                >
                  <Link to={`/product-details/${shoesData.name}`}>
                    <img
                      src={shoesData.main_picture_url}
                      alt={`Image of ${shoesData.name}`}
                      className="bg-light-gray"
                    />
                    <div className="relative h-32 px-2">
                      <h3 className="font-semibold">{shoesData.name}</h3>
                      <span className="text-dark-gray">{shoesData.gender}</span>
                      <p className="font-semibold py-4 absolute bottom-0">
                        $
                        {shoesData.retail_price_cents
                          ? shoesData.retail_price_cents / 100
                          : "N/A"}
                      </p>
                    </div>
                  </Link>
                </div>
              )
            })}
      </section>
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
