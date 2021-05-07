import React, { useState } from "react"
import Square from "./Square"

const Board = (props) => {
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
  let columns = ["h", "g", "f", "e", "d", "c", "b", "a"]
  for (let row = 1; row <= 8; row++) {
    columns.forEach((column) => {

      let id = `${column}${row}`

      const selectFirstSquare = () => {
        if ((boardState[column][row - 1]) !== null && props.selectedSquare === null && props.bankSelection === null) {
          props.setSelectedSquare(id)
        }
    
        if (props.selectedSquare == id) {
          props.setSelectedSquare(null)
        }
      }

      const movePiece = () => {
        if (props.selectedSquare !== null) {
          let oldSpace = props.selectedSquare
          let oldSpaceData = oldSpace.split("")
          let pieceOnOldSpace = boardState[oldSpaceData[0]][parseInt(oldSpaceData[1]) - 1]

          let newBoard = boardState
          newBoard[oldSpaceData[0]].splice((parseInt(oldSpaceData[1] - 1)), 1, null)
          newBoard[column].splice((row - 1), 1, pieceOnOldSpace)

          setBoardState(newBoard)
    
          props.setSelectedSquare(null)
        }
      }

      const addPiece = () => {
        if (props.bankSelection !== null) {
          let newPiece = props.bankSelection 
          if (newPiece === "x") {
            newPiece = null
          }

          let newBoard = boardState
          newBoard[column].splice((row - 1), 1, newPiece)

          setBoardState(newBoard)

          props.setBankSelection(null)
        }
      }

      const gameOverWhite = () => {
        let gameOver = true

        columns.forEach(letter => {
          boardState[letter].forEach(square => {
            if (square === "wk") {
              gameOver = false
            }
          })
        })

        if (gameOver === true) {
          alert("black wins placeholder animation")
          // RESET BOARD
        }

      }

      const gameOverBlack = () => {
        let gameOver = true

        columns.forEach(letter => {
          boardState[letter].forEach(square => {
            if (square === "bk") {
              gameOver = false
            }
          })
        })

        if (gameOver === true) {
          alert("white wins placeholder animation")
          // RESET BOARD
        }

      }

      boardData.unshift(
        <Square
          key={id}
          row={row}
          column={column}
          selectedSquare={props.selectedSquare}
          boardState={boardState}
          movePiece={movePiece}
          selectFirstSquare={selectFirstSquare}
          addPiece={addPiece}
          gameOverWhite={gameOverWhite}
          gameOverBlack={gameOverBlack}
        />
      )
      if (column === "a") {
        boardData.unshift(
          <br key={`break ${row}`}/>
        )
      }
    })
  }

  return <div id="board">{boardData}</div>
}

export default Board
