import React from "react"
import Square from "./Square"

const Board = (props) => {

  let boardData = []
  for (let i = 1; i <= 8; i++) {

    boardData.unshift(
      <div>
        <span>
          <Square row={i} column="a"/>
          <Square row={i} column="b"/>
          <Square row={i} column="c"/>
          <Square row={i} column="d"/>
          <Square row={i} column="e"/>
          <Square row={i} column="f"/>
          <Square row={i} column="g"/>
          <Square row={i} column="h"/>
        </span>
        <br/>
      </div>
    )
  }

  return (
    <div className="board">
      {boardData}
    </div>
  )

}

export default Board