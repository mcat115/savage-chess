import React from "react"

const Save = (props) => {
  let display

  if (props.saveData["title"] === null || !props.saveData["title"].replace(/\s/g, "").length) {
    display = props.saveData["created_at"]
  } else {
    display = props.saveData["title"]
  }

  const clickSave = () => {
    props.setBoardState(props.saveData["position"])
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
      props.setBoardStates(updatedSavesList["board_saves"])
    } catch (err) {
      console.error(err)
    }
  }

  const clickDelete = () => {
    if (confirm("Are you sure you want to delete this save?")) {
      deleteSave(props.saveData["id"])
    }  
  }

  return (
    <li>
      <span onClick={clickSave} className="saveText">
        {display}
      </span>
      <span>
        <i onClick={clickDelete} className="fas fa-trash-alt trash"></i>
      </span>
    </li>
  )
}

export default Save
