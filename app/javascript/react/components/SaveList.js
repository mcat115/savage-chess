import React, { useState, useEffect } from "react"
import Save from "./Save"

const SaveList = (props) => {
  let expandedDisclaimer = "Note: Once you load a save, you will be able to play around with it freely, and jump between other saves without losing your spot in the previous one. \
  The changes you make to these saves will be held for the entire duration of your time on the page (unless you end the game by killing the king). \
  If you want to keep these changes, hit the save button again and it will create a new save branch from the current position, while leaving your old save intact for next time you visit!";
  
  const [boardSaves, setBoardSaves] = useState([])
  const [currentUserId, setCurrentUserId] = useState(null)
  const [disclaimer, setDisclaimer] = useState("")

  const fetchSaves = async () => {
    try {
      const response = await fetch("/api/v1/board_saves")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setCurrentUserId(responseBody["current_user_id"])
      setBoardSaves(responseBody["data"])
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchSaves()
  }, [])

  const postSave = async (boardPayload) => {
    try {
      const response = await fetch("/api/v1/board_saves", {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(boardPayload),
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const newState = await response.json()
      setBoardSaves(boardSaves.concat([newState["board_save"]]))
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const clickSave = () => {
    let title = prompt("What would you like to name the save?")
    if (title === "") {
      title = null
    }
    postSave({
      position: props.boardState,
      title: title,
    })
  }

  const clickDisclaimer = () => {
    disclaimer === expandedDisclaimer ? setDisclaimer("") : setDisclaimer(expandedDisclaimer)
  }

  let listOfSaves = []

  if (currentUserId > 0) {
    boardSaves.forEach((save) => {
      listOfSaves.unshift(
        <Save
          key={save.id}
          saveData={save}
          setBoardState={props.setBoardState}
          setBoardSaves={setBoardSaves}
          pauseStatus={props.pauseStatus} 
        />
      )
    })

    return (
      <div>
        <p className="buttonClass center" onClick={clickSave}>
          Save current state of the board
        </p>
        <p className="listOfSaves center" id="warning">
          Click any of your below saves to load them onto the board. Make sure
          to save your current position first if you don't want to lose it!
        </p>
        <ul className="listOfSaves center">{listOfSaves}</ul>
        <p>{disclaimer}</p>
        <p className="click center" id="toggle" onClick={clickDisclaimer}>
          Click to toggle save disclaimer
        </p>
      </div>
    )
  } else {
    return (
      <p className="playWords center">Sign in to access save functionality!</p>
    )
  }
}

export default SaveList
