import React from "react"

const Save = (props) => {
  let display

  if (props.saveData["title"] === null) {
    display = props.saveData["created_at"]
  } else {
    display = props.saveData["title"]
  }

  const click = () => {
    props.setBoardState(props.saveData["position"])
  }

  return <li className="saveComponent" onClick={click}>{display}</li>
}

export default Save
