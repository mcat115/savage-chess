import React, { useState } from "react"
import Square from "./Square"
import SavedStateSection from "./SavedStatesSection"
import AnimationLogic from "./AnimationLogic"

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
        if (
          boardState[column][row - 1] !== "empty" &&
          props.selectedSquare === null &&
          props.bankSelection === null
        ) {
          props.setSelectedSquare(id)
          props.setLastSelectedPiece(boardState[column][row - 1])
        }
      }

      const movePiece = () => {
        if (props.selectedSquare !== null) {
          let oldSpaceData = props.selectedSquare.split("")
          let pieceOnOldSpace =
            boardState[oldSpaceData[0]][parseInt(oldSpaceData[1]) - 1]

          let newBoard = boardState
          newBoard[oldSpaceData[0]].splice(
            parseInt(oldSpaceData[1] - 1),
            1,
            "empty"
          )
          newBoard[column].splice(row - 1, 1, pieceOnOldSpace)
          setBoardState(newBoard)
          audio.play()
          props.setSelectedSquare(null)
        }
      }

      const addPiece = () => {
        if (props.bankSelection !== null) {
          let newBoard = boardState
          newBoard[column].splice(row - 1, 1, props.bankSelection)

          setBoardState(newBoard)
          audio.play()
          props.setBankSelection(null)
        }
      }

      const checkGameOverWhite = () => {
        let gameOver = true

        columns.forEach((letter) => {
          boardState[letter].forEach((square) => {
            if (square === "wk") {
              gameOver = false
            }
          })
        })

        let pieces = ["bp", "bn", "bb", "br", "bq", "bk"]

        if (gameOver === true) {
          pieces.forEach((piece) => {
            if (props.lastSelectedPiece === piece) {
              setWhatShouldReturn(piece)
            }
            if (
              props.lastSelectedPiece === "empty" ||
              props.lastSelectedPiece.charAt(0) === "w"
            ) {
              setWhatShouldReturn("wk")
            }
          })
        }
      }

      const checkGameOverBlack = () => {
        let gameOver = true

        columns.forEach((letter) => {
          boardState[letter].forEach((square) => {
            if (square === "bk") {
              gameOver = false
            }
          })
        })

        let pieces = ["wp", "wn", "wb", "wr", "wq", "wk"]

        if (gameOver === true) {
          pieces.forEach((piece) => {
            if (props.lastSelectedPiece === piece) {
              setWhatShouldReturn(piece)
            }
            if (
              props.lastSelectedPiece === "empty" ||
              props.lastSelectedPiece.charAt(0) === "b"
            ) {
              setWhatShouldReturn("bk")
            }
          })
        }
      }

      let method

      if (perspective === "white") {
        method = (square) => {
          boardData.unshift(square)
        }
      } else {
        method = (square) => {
          boardData.push(square)
        }
      }

      method(
        <Square
          key={id}
          row={row}
          column={column}
          selectedSquare={props.selectedSquare}
          boardState={boardState}
          movePiece={movePiece}
          selectFirstSquare={selectFirstSquare}
          addPiece={addPiece}
          checkGameOverWhite={checkGameOverWhite}
          checkGameOverBlack={checkGameOverBlack}
        />
      )
      if (column === "a" && row !== 8) {
        method(<br key={`break ${row}`} />)
      }
    })
  }

  const click = () => {
    if (perspective === "white") {
      setPerspective("black")
    } else {
      setPerspective("white")
    }
  }

  if (whatShouldReturn === "board") {
    return (
      <>
        <p onClick={click} id="flip">
          Flip the board perspective!
        </p>
        <div id="board">{boardData}</div>
        <SavedStateSection
          boardState={boardState}
          setBoardState={setBoardState}
        />
      </>
    )
  } else {
    return (
      <AnimationLogic
        whatShouldReturn={whatShouldReturn}
        setWhatShouldReturn={setWhatShouldReturn}
        setBoardState={setBoardState}
        defaultBoard={defaultBoard}
      />
    )
  }
}

export default Board
