import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"
import HoverBlackButton from "./../ui/components/HoverBlackButton"
import LinkHoverLoad from "./../ui/components/LinkHoverLoad"

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home")

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }
  return (
    <nav className="flex justify-between items-center h-16 px-6 max-w-[1400px] mx-auto">
      <Link to={"/Home"} className="h-10">
        <img
          src="/images/LogoName.png"
          alt="Logo name Stride Vault"
          className="h-full bg-black rounded-tl-lg rounded-br-lg"
          onClick={() => handleLinkClick("Home")}
        />
      </Link>

      <div className="flex space-x-6 items-center">
        <Link
          to={"/Home"}
          className="relative group"
          onClick={() => handleLinkClick("Home")}
        >
          Home
          {activeLink === "Home" && (
            <span className="absolute left-0 bottom-0 block w-1/2 h-[2px] bg-black" />
          )}
          <LinkHoverLoad />
        </Link>

        <Link
          to={"/Shop"}
          className="relative group"
          onClick={() => handleLinkClick("Shop")}
        >
          Shop
          {activeLink === "Shop" && (
            <span className="absolute left-0 bottom-0 block w-1/2 h-[2px] bg-black" />
          )}
          <LinkHoverLoad />
        </Link>

        <Link to={"/CarShop"} onClick={() => handleLinkClick("CarShop")}>
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>

        <HoverBlackButton>
          <Link to={"/Register"} onClick={() => handleLinkClick("Register")}>
            Register
          </Link>
        </HoverBlackButton>
      </div>
    </nav>
  )
}

export default Navbar
