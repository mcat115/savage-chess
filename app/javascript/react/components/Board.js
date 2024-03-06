import React, { useState } from "react"
import Square from "./Square"
import SaveList from "./SaveList"
import Animation from "./Animation"

const Board = (props) => {
  const defaultBoard = {
    a: ["wr", "wp", "empty", "empty", "empty", "empty", "bp", "br"],
    b: ["wn", "wp", "empty", "empty", "empty", "empty", "bp", "bn"],
    c: ["wb", "wp", "empty", "empty", "empty", "empty", "bp", "bb"],
    d: ["wq", "wp", "empty", "empty", "empty", "empty", "bp", "bq"],
    e: ["wk", "wp", "empty", "empty", "empty", "empty", "bp", "bk"],
    f: ["wb", "wp", "empty", "empty", "empty", "empty", "bp", "bb"],
    g: ["wn", "wp", "empty", "empty", "empty", "empty", "bp", "bn"],
    h: ["wr", "wp", "empty", "empty", "empty", "empty", "bp", "br"],
  }
  const [boardState, setBoardState] = useState(defaultBoard)
  const [whatShouldReturn, setWhatShouldReturn] = useState("board")
  const [perspective, setPerspective] = useState("white")

  let audio = new Audio("/sound.wav")
  let boardData = []
  let columns = ["h", "g", "f", "e", "d", "c", "b", "a"]
  for (let row = 1; row <= 8; row++) {
    columns.forEach((column) => {
      let id = `${column}${row}`

      const selectFirstSquare = () => {
        if (props.pauseStatus === "Resume the game!") {
          alert("Resume the game to continue!")
        } else if (
          boardState[column][row - 1] !== "empty" &&
          props.selectedSquare === null &&
          props.bankSelection === null
        ) {
          props.setSelectedSquare(id)
          props.setLastSelectedPiece(boardState[column][row - 1])
        } else if (props.selectedSquare === id) {
          props.setSelectedSquare(null)
          return "no change"
        }
      }

      const movePiece = () => {
        if (props.selectedSquare !== null) {
          let oldSpaceData = props.selectedSquare.split("")
          let pieceOnOldSpace =
            boardState[oldSpaceData[0]][parseInt(oldSpaceData[1]) - 1]

          boardState[oldSpaceData[0]].splice(
            parseInt(oldSpaceData[1] - 1),
            1,
            "empty"
          )
          boardState[column].splice(row - 1, 1, pieceOnOldSpace)

          audio.play()
          props.setSelectedSquare(null)
        }
      }

      const addPiece = () => {
        if (props.bankSelection !== null) {
          boardState[column].splice(row - 1, 1, props.bankSelection)
          props.setBankSelection(null)
        }
      }

      const checkGameOver = (kingPiece, oppositePieces) => {
        let gameOver = true

        columns.forEach((letter) => {
          boardState[letter].forEach((square) => {
            if (square === kingPiece) {
              gameOver = false
            }
          })
        })

        if (gameOver) {
          oppositePieces.forEach((piece) => {
            if (props.lastSelectedPiece === piece) {
              setWhatShouldReturn(piece)
            }
            if (
              props.lastSelectedPiece === "empty" ||
              props.lastSelectedPiece.charAt(0) === kingPiece.charAt(0)
            ) {
              setWhatShouldReturn(kingPiece)
            }
          })
        }
      }

      let insertionMethod

      if (perspective === "white") {
        insertionMethod = (square) => {
          boardData.unshift(square)
        }
      } else {
        insertionMethod = (square) => {
          boardData.push(square)
        }
      }

      insertionMethod(
        <Square
          key={id}
          row={row}
          column={column}
          selectedSquare={props.selectedSquare}
          boardState={boardState}
          movePiece={movePiece}
          selectFirstSquare={selectFirstSquare}
          addPiece={addPiece}
          checkGameOver={checkGameOver}
        />
      )
      if (column === "a" && row !== 8) {
        insertionMethod(<br key={`break ${row}`} />)
      }
    })
  }

  const handleClick = () => {
    if (perspective === "white") {
      setPerspective("black")
    } else {
      setPerspective("white")
    }
  }

  if (whatShouldReturn === "board") {
    return (
      <>
        <p onClick={handleClick} className="buttonClass center">
          Flip board perspective
        </p>
        <div id="board" className="center">
          {boardData}
        </div>
        <SaveList 
          boardState={boardState}
          setBoardState={setBoardState}
          pauseStatus={props.pauseStatus} 
        />
      </>
    )
  } else {
    return (
      <Animation
        whatShouldReturn={whatShouldReturn}
        setWhatShouldReturn={setWhatShouldReturn}
        setBoardState={setBoardState}
        defaultBoard={defaultBoard}
        setPauseStatus={props.setPauseStatus}
        setBankSelection={props.setBankSelection}
      />
    )
  }
}

export default Board
