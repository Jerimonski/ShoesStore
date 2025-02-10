function LoadingScreen() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col animate-pulse w-64 bg-black">
        <img src="/images/Logo.png" alt="LogoStrideVault" />
        <span className="text-white text-3xl text-center font-bold py-2">
          Vault
        </span>
      </div>
    </div>
  )
}

export default LoadingScreen
