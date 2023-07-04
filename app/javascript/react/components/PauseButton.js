import React, { useState } from "react"
import buttonImage from "../../../assets/images/meeting_button.png"

const PauseButton = (props) => {
  const handleClick = () => {
    if (props.pauseStatus === "Pause the game!") {
      props.setPauseStatus("Resume the game!")
    } else {
      props.setPauseStatus("Pause the game!")
      alert("Fight!")
    }
  }

  return (
    <div id="pauseDiv" className="center">
      <p>{props.pauseStatus}</p>
      <img src={buttonImage} onClick={handleClick} />
    </div>
  )
}

export default PauseButton
