import React, { useState, useEffect } from "react"

const SavedStatesSection = (props) => {
  const [boardStates, setBoardStates] = useState([])
  const [currentUserId, setCurrentUserId] = useState(null)

  // ONLY FETCH CURRENT USER's BOARDS AND USER ID, DONE IN CONTROLLER?
  const fetchStates = async () => {
    try {
      const response = await fetch("/api/v1/board_saves")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setBoardStates(responseBody["board_saves"])
      setCurrentUserId(responseBody["board_saves"][0]["user"]["id"])
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }



  useEffect(() => {
    fetchStates()
  }, [])

  

  const postState = async (boardPayload) => {
    // event.preventDefault()      event was also an argument
    // const boardPayload = {
    //   position: props.currentBoard
    // }
    try {
      const response = await fetch("/api/v1/board_saves", {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(boardPayload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const newState = await response.json()
      let stateList = boardStates
      stateList.unshift(newState)
      setBoardStates(stateList)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const click = () => {
    postState(props.boardState)
  }

  let listOfSaves = []

  if (currentUserId !== null) {
    boardStates.forEach(save => {
      if (save["title"] === null) {
        listOfSaves.unshift(
         <li>{save["created_at"]}</li>
        )
      } else {
        listOfSaves.unshift(
          <li>{save["title"]}</li>
        )
      }
    })
  }


  if (currentUserId !== null) { 
    return (
      <div>
        <p id="save" onClick={click}>Save the current state of the board!</p>
        <ul>{listOfSaves}</ul>
      </div>
    ) 
  } else {
    return null
  }
}

export default SavedStatesSection