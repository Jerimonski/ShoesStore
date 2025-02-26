function HoverBlackButton({ children, className }) {
  return (
    <button
      className={`border border-black px-2 py-1 hover:bg-black hover:text-white duration-200 ${className}`}
    >
      {children}
    </button>
  )
}

export default HoverBlackButton
