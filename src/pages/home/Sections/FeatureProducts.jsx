import SneakerCard1 from "../../../components/ui/SneakerCard1"

function FeatureProducts() {
  return (
    <section className="bg-smoke-gray">
      <div className="max-w-[1600px] mx-auto py-20 space-y-14">
        <h2 className="text-center text-4xl font-semibold">
          Features Products
        </h2>
        <div className="flex justify-center gap-12 max-md:flex-col max-md:w-64 mx-auto">
          <SneakerCard1
            imgSrc="https://i.pinimg.com/736x/a2/36/04/a236040a02b89acef5708880fa380119.jpg"
            alt="Sneaker Model: Air Jordan 4 Red Cement"
            title="Air Jordan 4 Red Cement"
          />
          <SneakerCard1
            imgSrc="https://i.pinimg.com/736x/46/40/49/4640494e087c91a00066c0e83f3d4db5.jpg"
            alt="Sneaker Model: Dunk Low Retro Panda"
            title="Dunk Low Retro Panda"
          />
          <SneakerCard1
            imgSrc="https://i.pinimg.com/736x/32/3c/f6/323cf6fa0d936d1a234228959fad4ac5.jpg"
            alt="Sneaker Model: Air Force One"
            title="Air Jordan 1 Low Bred Toe"
          />
        </div>
      </div>
    </section>
  )
}

export default FeatureProducts
