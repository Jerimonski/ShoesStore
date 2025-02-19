function SneakerCard2({ imgSrc, alt, title, linkPage }) {
  return (
    <article className="w-48 relative cursor-pointer">
      <a href={linkPage}>
        <img
          src={imgSrc}
          alt={alt}
          className="h-80 hover:opacity-20 duration-200 object-cover"
        />
        <div className="absolute bottom-0 p-2 space-y-2">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-xs">Discover the collection</p>
        </div>
      </a>
    </article>
  )
}

export default SneakerCard2
