function OurStory() {
  return (
    <section className="max-w-[1600px] mx-auto">
      <div className=" py-20 flex items-center gap-12 max-md:flex-col px-4">
        <img
          src="./images/strideVault.jpg"
          alt="strideVault Logo"
          className="max-h-[500px] max-md:h-64 max-lg:h-80"
        />
        <div className="space-y-4 max-w-[800px]">
          <h2 className="text-3xl font-semibold">OUR STORY</h2>
          <p className="text-lg">
            StrideVault was founded by sneaker enthusiasts with a vision to
            merge style, innovation, and authenticity. We offer exclusive
            releases, rare finds, and timeless staples, ensuring sneaker culture
            thrives. More than a store, we’re a community that celebrates
            sneaker history, trends, and individuality. Join us in redefining
            the sneaker game—one stride at a time.
          </p>
          <button className="py-1 px-4 border hover:bg-smoke-gray duration-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurStory
