import React, { useState } from "react"
import buttonImage from "../../../assets/images/meeting_button.png"

const MeetingButton = () => {
  const [message, setMessage] = useState("Call an emergency war crime meeting!")

  const click = () => {
    if (message === "Call an emergency war crime meeting!") {
      alert("Deliberate!")
      setMessage("End the emergency war crime meeting!")
    } else {
      setMessage("Call an emergency war crime meeting!")
      alert(
        "If you proved your opponent cheated, X out their king with the icon bank!"
      )
    }
  }

  return (
    <div id="emergencyMeetingDiv">
      <p>{message}</p>
      <img src={buttonImage} onClick={click} />
    </div>
  )
}

export default MeetingButton
