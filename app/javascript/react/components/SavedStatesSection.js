import React, { useState, useEffect } from "react"

const SavedStatesSection = (props) => {
  const [boardStates, setBoardStates] = useState([])
  const [currentUserId, setCurrentUserId] = useState(null)

  const fetchCurrentUser = async () => {
    try {
      const response = await fetch("/api/v1/current_users")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setCurrentUserId(responseBody.id)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }






  // ONLY FETCH CURRENT USER's BOARDS, DONE IN CONTROLLER?
  const fetchStates = async () => {
    try {
      const response = await fetch("/api/v1/board_saves")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setBoardStates(responseBody)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }







  useEffect(() => {
    fetchCurrentUser()
    // fetchStates()
  }, [])

  const postState = async (payload) => {
    try {
      const response = await fetch("/api/v1/board_saves", {
        credentials: "same-origin",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const newState = await response.json()
      stateList = boardStates
      stateList.unshift(newState)
      setBoardStates(stateList)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  let currentBoard = props.boardState

  const click = () => {
    // postState({
    //   board: props.boardState,
    //   user_id: currentUserId
    // })

    postState(currentBoard)
  }

  if (currentUserId !== null) {
    return (
      <div>
        <p id="save" onClick={click}>Save the current state of the board!</p>
        {/* {boardStates} */}
      </div>
    ) 
  } else {
    return null
  }
}

export default SavedStatesSection