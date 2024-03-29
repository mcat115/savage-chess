import React from "react"

const Save = (props) => {
  const clickSave = () => {
    if (props.pauseStatus === "Pause the game!") {
      props.setBoardState(props.saveData["position"])
    } else {
      alert("Resume the game to continue!")
    }
  }

  const deleteSave = async (saveId) => {
    try {
      const response = await fetch(`api/v1/board_saves/${saveId}`, {
        credentials: "same-origin",
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const updatedSavesList = await response.json()
      props.setBoardSaves(updatedSavesList["board_saves"])
    } catch (err) {
      console.error(err)
    }
  }

  const clickDelete = () => {
    if (confirm("Press OK to confirm save deletion")) {
      deleteSave(props.saveData["id"])
    }  
  }

  return (
    <li>
      <span onClick={clickSave} className="saveText click">
        {props.saveData["title"] === null || !props.saveData["title"].replace(/\s/g, "").length ? (
          props.saveData["created_at"]
        ) : (
          props.saveData["title"]
        )}
      </span>
      <span>
        <i onClick={clickDelete} className="fas fa-trash-alt trash click"></i>
      </span>
    </li>
  )
}

export default Save
