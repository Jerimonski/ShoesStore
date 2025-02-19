function Subscribe() {
  return (
    <section className="max-w-[1600px] mx-auto my-12">
      <div className="bg-smoke-gray text-center py-12 space-y-14 py-8">
        <h2 className="text-3xl font-semibold">Joint the Vault</h2>
        <p>
          Subscribe to our newsletter for exclusive drops, special offers, and
          streetwear insights.
        </p>
        <div className="space-x-4">
          <input
            type="text"
            placeholder="Your email address"
            className="border w-64 py-1 px-2"
          />
          <button className="text-sm bg-black text-white py-2 px-4 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
