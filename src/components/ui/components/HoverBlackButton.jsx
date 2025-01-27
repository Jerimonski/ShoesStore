function HoverBlackButton({ children }) {
  return (
    <button className="border border-black px-2 py-1 hover:bg-black hover:text-white duration-200">
      {children}
    </button>
  )
}

export default HoverBlackButton
