import React, { useState } from "react"
import buttonImage from "../../../assets/images/meeting_button.png"

const Button = () => {
  const [message, setMessage] = useState("Pause the game!")

  const click = () => {
    if (message === "Pause the game!") {
      setMessage("Resume the game!")
    } else {
      setMessage("Pause the game!")
      alert("Fight!")
    }
  }

  return (
    <div id="pauseDiv" className="center">
      <p>{message}</p>
      <img src={buttonImage} onClick={click} />
    </div>
  )
}

export default Button
