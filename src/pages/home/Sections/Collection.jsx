import SneakerCard2 from "../../../components/ui/SneakerCard2"

function Collection() {
  return (
    <section>
      <div className="bg-black text-white py-20 space-y-14">
        <h2 className="text-3xl font-semibold text-center">
          FEATURED COLLECTION
        </h2>
        <div className="flex justify-center gap-8 max-md:flex-col max-md:w-64 max-md:items-center mx-auto">
          <SneakerCard2
            imgSrc="https://i.pinimg.com/736x/dd/c6/c7/ddc6c7586448c1644018beda7e1e7c8f.jpg"
            alt="Jordan 1 collection"
            title="Air Jordan 1"
            linkPage="/shop"
          />
          <SneakerCard2
            imgSrc="https://i.pinimg.com/736x/e5/26/41/e526411787ab506175e5422be77e2658.jpg"
            alt="Nike Dunks collection"
            title="Nike Dunk Low"
            linkPage="/shop"
          />
          <SneakerCard2
            imgSrc="https://i.pinimg.com/736x/fe/c6/2d/fec62d0c1309dfef329de4b1a3b03ae2.jpg"
            alt="Jordan 4 Retro collection"
            title="Jordan 4 Retro"
            linkPage="/shop"
          />
          <SneakerCard2
            imgSrc="https://i.pinimg.com/736x/51/0f/37/510f37fb7fbcfc79014a780f96699f2e.jpg"
            alt="Air Force one collection"
            title="Air Force one"
            linkPage="/shop"
          />
        </div>
      </div>
    </section>
  )
}

export default Collection
