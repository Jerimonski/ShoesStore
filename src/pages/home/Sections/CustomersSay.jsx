import CommentsCard from "../../../components/ui/CommentsCard"

function CustomersSay() {
  return (
    <section className="max-w-[1600px] mx-auto">
      <div className=" py-20 space-y-14">
        <h2 className="text-3xl font-semibold text-center">
          WHAT OUR CUSTOMERS SAY
        </h2>
        <div className="flex gap-8 px-4 justify-center max-md:flex-col items-center">
          <CommentsCard customerName="Happy Customer 1">
            {`"StrideVault has the best selection of streetwear sneakers.
             is unmatched!"`}
          </CommentsCard>
          <CommentsCard customerName="Happy Customer 2">
            {`"StepUp Shoes offers top-notch sneakers that make my feet feel 
            amazing all day."`}
          </CommentsCard>
          <CommentsCard customerName="Happy Customer 3">
            {`"SoleMates has the coolest sneaker designs! Quality and fashion 
            in every step."`}
          </CommentsCard>
        </div>
      </div>
    </section>
  )
}

export default CustomersSay
