import React, { useState } from "react"
import buttonImage from "../../../assets/images/meeting_button.png"


const MeetingButton = () => {
  const [message, setMessage] = useState("Call an emergency war crime meeting!")
  const [meetingStatus, setMeetingStatus] = useState("inactive")

  const click = () => {
    if (meetingStatus === "inactive") {
      alert("Deliberate!")
      setMessage("End the emergency war crime meeting!")
      setMeetingStatus("active")
    } else {
      setMessage("Call an emergency war crime meeting!")
      setMeetingStatus("inactive")
      alert("If you proved your opponent cheated, X out their king with the icon bank!")
    }
  }

  return (
    <div id="emergencyMeetingDiv">
      <p>{message}</p>
      <img src={buttonImage} onClick={click}/>
    </div>
  )
}

export default MeetingButton