function HomeView() {
  return (
    <section>
      <article className="flex justify-between items-center mx-auto h-screen py-14">
        <img
          className="absolute brightness-50 w-full h-full object-cover"
          src="https://i.pinimg.com/736x/56/83/3a/56833acd9b926698168f4b9f2d6da8d9.jpg"
          alt="Air Jordan 1"
        />
        <div className="space-y-4 mx-auto relative text-white px-4">
          <h1 className="text-6xl font-semibold">
            RUN THE STREETS. OWN THE GAME...
          </h1>
          <p className="text-2xl">
            Stay ahead with exclusive drops, rare finds, and sneakers that speak
            for themselves.
          </p>
          <button className="text-lg bg-black text-white py-4 px-8 flex mx-auto rounded hover:scale-110 duration-300">
            <a href="/shop">Shop Now</a>
          </button>
        </div>
      </article>
    </section>
  )
}

export default HomeView
