import LinkHover from "./../ui/LinkHover"
function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <section className="mx-auto max-w-[1600px] pt-12 pb-1">
        <article className="flex px-8">
          <div className="w-1/2">
            <h3 className="text-lg font-semibold py-4">QUICK LINKS</h3>
            <ul className="space-y-2 flex flex-col">
              <LinkHover txtLink="New Arrivals" />
              <LinkHover txtLink="Best Sellers" />
              <LinkHover txtLink="Upcoming Releases" />
              <LinkHover txtLink="Sale" />
              <LinkHover txtLink="Gift Cards" />
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="text-lg font-semibold py-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2 flex flex-col">
              <LinkHover txtLink="Contact Us" />
              <LinkHover txtLink="Shipping & Returns" />
              <LinkHover txtLink="FAQ" />
              <LinkHover txtLink="Size Guide" />
              <LinkHover txtLink="Track Your Order" />
            </ul>
          </div>
        </article>
        <article className="border-t border-gray-800 my-6 px-8 py-6 flex items-center justify-between">
          <p className="w-1/2 text-off-blue-gray max-sm:w-32">
            &copy; 2025 StrideVault. All rights reserved.
          </p>
          <div className="max-lg:w-1/2 flex max-md:flex-col gap-4">
            <LinkHover txtLink="Privacy Policy" />
            <LinkHover txtLink="Terms of Service" />
            <LinkHover txtLink="Track Your Order" />
          </div>
        </article>
      </section>
    </footer>
  )
}

export default Footer
