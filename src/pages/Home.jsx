function Home() {
  const defaulImage =
    "https://i.pinimg.com/736x/57/dd/03/57dd03807bb577cb116e7309c56fde9d.jpg"

  return (
    <div className="w-full">
      {/* firstSection */}
      <section>
        <div className=" flex justify-between items-center bg-blue-200 mx-auto max-w-[1600px] py-14">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold">STEP INTO STYLE</h1>
            <p className="text-sm">
              Elevate your streetwear game with our premium sneaker collection.
            </p>
            <button className="text-sm bg-black text-white py-1 px-4 rounded">
              Shop Now
            </button>
          </div>
          <img className="h-96" src={defaulImage} alt="" />
        </div>
      </section>
      {/* second */}
      <section className="bg-[#F3F4F6]">
        <div className="max-w-[1600px] mx-auto py-14 space-y-8">
          <h2 className="text-center text-2xl font-semibold">
            Features PRODUCTS
          </h2>
          <div className="w-96 h-[450px] bg-white p-6 space-y-4">
            <img src={defaulImage} alt="Sneaker Model: Air Force One" />
            <h3 className="font-semibold">SNEAKER MODEL 1</h3>
            <button className="w-full border-2 py-1 text-sm hover:bg-[#F3F4F6]">
              See model
            </button>
          </div>
        </div>
      </section>
      {/* third */}
      <section>
        <div className="max-w-[1600px] mx-auto py-14 flex items-center px-8 gap-8">
          <img
            src={defaulImage}
            alt="fuegito muito zarpadinho"
            className="w-[700px]"
          />
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">OUR STORY</h3>
            <p>
              Born from a passion for streetwear and sneaker culture,
              StrideVault is more than just a shoe store. Were a community of
              style enthusiasts, sneakerheads, and trendsetters. Our curated
              collection represents the best in urban fashion, blending comfort
              with cutting-edge design.
            </p>
            <button className="py-1 px-4 border hover:bg-[#F3F4F6]">
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* fourt */}
      <section>
        <div className="bg-black text-white py-14">
          <h3 className="text-2xl font-semibold text-center">
            FEATURED COLLECTION
          </h3>
          <div className="w-64 mx-auto mt-8 relative ">
            <img
              src={defaulImage}
              alt=""
              className="h-80 hover:opacity-20 duration-200"
            />
            <div className="absolute bottom-0 p-2 space-y-2">
              <h4 className="font-semibold">URBAN EDGE 1</h4>
              <p className="text-xs">Discover the collection</p>
            </div>
          </div>
        </div>
      </section>
      {/* fifth */}
      <div>
        <h3>WHAT OUR CUSTOMERS SAY</h3>
        <div>
          <p>LOREM IPSU</p>
          <span>happy customer 1</span>
        </div>
      </div>
    </div>
  )
}

export default Home
