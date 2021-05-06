import React, { useState, useEffect } from "react"

const SavedStatesSection = (props) => {
  const [boardStates, setBoardStates] = useState([])

  const [currentUserId, setCurrentUserId] = useState(null)

  // ONLY FETCH CURRENT USER's BOARDS
  const fetchStates = async () => {
    try {
      const response = await fetch("/api/v1/board_saves")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }

      const responseBody = await response.json()
      setBoardStates(responseBody)

      // setCurrentUser({
      //   id: responseBody.animal.current_user.id,
      //   username: responseBody.animal.current_user.username,
      //   profile_photo: responseBody.animal.current_user.profile_photo,
      //   role: responseBody.animal.current_user.role
      // })


    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchStates()
  }, [])

  const postState = async (payload) => {
    try {
      const response = await fetch("/api/v1/animals/${animalId}/reviews", {
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
      stateList = boardStates.unshift(newState)
      setBoardStates(stateList)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const click = () => {
    postState({
      board: props.boardState,
      user_id: current_user
    })
  }

  // if (user_signed_in?) {
    return (
      <div>
        <p id="save" onClick={click}>Save the current state of the board!</p>
        {boardStates}
      </div>
    )
  // }
}

export default SavedStatesSection