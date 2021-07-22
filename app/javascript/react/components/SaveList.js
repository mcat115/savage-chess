import React, { useState, useEffect } from "react"
import Save from "./Save"

const SaveList = (props) => {
  let defaultDisclaimer =
    "Note: Once you load a save, you will be able to play around with it freely, and jump between other saves without losing your spot in the previous one. The changes you make to these saves will be held for the entire duration of your time on the page (unless you end the game by killing the king). If you want to keep these changes, hit the save button again and it will create a new save branch from the current position, while leaving your old save in tact for next time you visit!"
  const [boardStates, setBoardStates] = useState([])
  const [currentUserId, setCurrentUserId] = useState(null)
  const [disclaimer, setDisclaimer] = useState(defaultDisclaimer)

  const fetchStates = async () => {
    try {
      const response = await fetch("/api/v1/board_saves")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setCurrentUserId(responseBody["current_user_id"])
      setBoardStates(responseBody["data"])
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchStates()
  }, [])

  const postState = async (boardPayload) => {
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
      setBoardStates(boardStates.concat([newState["board_save"]]))
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const clickSave = () => {
    let title = prompt("What would you like to name the save?")
    if (title === "") {
      title = null
    }
    postState({
      position: props.boardState,
      title: title,
    })
  }

  const clickDisclaimer = () => {
    if (disclaimer == defaultDisclaimer) {
      setDisclaimer("")
    } else {
      setDisclaimer(defaultDisclaimer)
    }
  }

  let listOfSaves = []

  if (currentUserId > 0) {
    boardStates.forEach((save) => {
      listOfSaves.unshift(
        <Save
          key={save.id}
          saveData={save}
          setBoardState={props.setBoardState}
          setBoardStates={setBoardStates}
        />
      )
    })

    return (
      <div>
        <p id="save" className="center" onClick={clickSave}>
          Save the current state of the board!
        </p>
        <p className="listOfSaves center" id="warning">
          Click any of your below saves to load them onto the board. Make sure
          to save your current position first if you don't want to lose it!
        </p>
        <ul className="listOfSaves center">{listOfSaves}</ul>
        <p>{disclaimer}</p>
        <p className="center click" onClick={clickDisclaimer}>
          Click to toggle save disclaimer
        </p>
      </div>
    )
  } else {
    return null
  }
}

export default SaveList
