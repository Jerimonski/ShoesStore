import { useState } from "react"

function State() {
  const [isActive, setIsActive] = useState(false)

  const isActiveHandle = () => {
    setIsActive(!isActive)
  }

  return { isActive, isActiveHandle }
}

export default State
