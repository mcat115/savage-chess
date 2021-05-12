import React from "react"

const Save = (props) => {
  let display

  if (props.saveData["title"] === null) {
    display = props.saveData["created_at"]
  } else {
    display = props.saveData["title"]
  }

  const clickSave = () => {
    props.setBoardState(props.saveData["position"])
  }

  const clickDelete = () => {
    alert("delete placeholder")
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
