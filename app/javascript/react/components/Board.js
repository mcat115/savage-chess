import React, { useState } from "react"
import Square from "./Square"

const Board = (props) => {
  const [selectedSquare, setSelectedSquare] = useState(null)
  const [boardState, setBoardState] = useState({
    a: ["wr", "wp", null, null, null, null, "bp", "br"],
    b: ["wn", "wp", null, null, null, null, "bp", "bn"],
    c: ["wb", "wp", null, null, null, null, "bp", "bb"],
    d: ["wq", "wp", null, null, null, null, "bp", "bq"],
    e: ["wk", "wp", null, null, null, null, "bp", "bk"],
    f: ["wb", "wp", null, null, null, null, "bp", "bb"],
    g: ["wn", "wp", null, null, null, null, "bp", "bn"],
    h: ["wr", "wp", null, null, null, null, "bp", "br"]
  })

  let boardData = []
  let letters = ["h", "g", "f", "e", "d", "c", "b", "a"]
  for (let i = 1; i <= 8; i++) {
    letters.forEach((letter) => {
      boardData.unshift(
        <Square
          key={`${letter}${i}`}
          row={i}
          column={letter}
          selectedSquare={selectedSquare}
          setSelectedSquare={setSelectedSquare}
          boardState={boardState}
          setBoardState={setBoardState}
        />
      )
      if (letter === "a") {
        boardData.unshift(
          <br key={`break number: ${i}`}/>
        )
      }
    })
  }

  return <div id="board">{boardData}</div>
}

export default Board
