import HomeView from "./Sections/HomeView"
import FeatureProducts from "./Sections/FeatureProducts"
import OurStory from "./Sections/OurStory"
import Collection from "./Sections/Collection"
import CustomersSay from "./Sections/CustomersSay"
import Subscribe from "./Sections/Subscribe"

function Home() {
  return (
    <div className="w-full">
      <HomeView />
      <FeatureProducts />
      <OurStory />
      <Collection />
      <CustomersSay />
      <Subscribe />
    </div>
  )
}

export default Home
