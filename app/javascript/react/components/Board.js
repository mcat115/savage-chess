import React from "react"
import Square from "./Square"

const Board = (props) => {

  let boardData = []
  for (let i = 0; i < 8; i++) {

    boardData.push(
      <div>
        <span>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </span>
        <br/>
      </div>
    )
  }

  return (
    <>
      {boardData}
    </>
  )

}

export default Board