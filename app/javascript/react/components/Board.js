import React, { useState } from "react"
import Square from "./Square"

const Board = (props) => {
  const [selectedSquare, setSelectedSquare] = useState(null)
  const [boardState, setBoardState] = useState({
    gameStarted: false,
    h: ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
    g: ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    f: [null, null, null, null, null, null, null, null],
    e: [null, null, null, null, null, null, null, null],
    d: [null, null, null, null, null, null, null, null],
    c: [null, null, null, null, null, null, null, null],
    b: ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    a: ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"]
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
