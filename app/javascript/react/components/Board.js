import React, { useState } from "react"
import Square from "./Square"

const Board = (props) => {
  const [selectedSquare, setSelectedSquare] = useState(null)

  let boardData = []
  let letters = ["h", "g", "f", "e", "d", "c", "b", "a"]
  for (let i = 1; i <= 8; i++) {
    letters.forEach((letter) => {
      boardData.unshift(
        <Square
          row={i}
          column={letter}
          selectedSquare={selectedSquare}
          setSelectedSquare={setSelectedSquare}
        />
      )
      if (letter === "a") {
        boardData.unshift(
          <br/>
        )
      }
    })
  }

  return <div id="board">{boardData}</div>
}

export default Board
