function SneakerCard1({ imgSrc, alt, title }) {
  return (
    <article
      className="max-h-[450px] bg-white p-6 space-y-4"
      aria-label={`Sneaker model: ${title}`}
    >
      <img
        src={imgSrc}
        alt={alt}
        className="h-64 w-64 object-cover rounded-md"
      />
      <h3 className="font-semibold">{title}</h3>
      <button className="w-full border-2 py-1 text-sm hover:bg-smoke-gray duration-200 rounded-md">
        See model
      </button>
    </article>
  )
}

export default SneakerCard1
