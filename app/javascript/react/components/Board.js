import React, { useState } from "react"
import Square from "./Square"

const Board = (props) => {

  const [selectedSquare, setSelectedSquare] = useState(null)

  let boardData = []
  for (let i = 1; i <= 8; i++) {

    boardData.unshift(
      <>
        <span>
          <Square row={i} column="a" selectedSquare={selectedSquare} setSelectedSquare={setSelectedSquare}/>
          <Square row={i} column="b" selectedSquare={selectedSquare} setSelectedSquare={setSelectedSquare}/>
          <Square row={i} column="c" selectedSquare={selectedSquare} setSelectedSquare={setSelectedSquare}/>
          <Square row={i} column="d" selectedSquare={selectedSquare} setSelectedSquare={setSelectedSquare}/>
          <Square row={i} column="e" selectedSquare={selectedSquare} setSelectedSquare={setSelectedSquare}/>
          <Square row={i} column="f" selectedSquare={selectedSquare} setSelectedSquare={setSelectedSquare}/>
          <Square row={i} column="g" selectedSquare={selectedSquare} setSelectedSquare={setSelectedSquare}/>
          <Square row={i} column="h" selectedSquare={selectedSquare} setSelectedSquare={setSelectedSquare}/>
        </span>
        <br/>
      </>
    )
  }

  return (
    <div id="board">
      {boardData}
    </div>
  )

}

export default Board