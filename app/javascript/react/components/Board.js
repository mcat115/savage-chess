import React, { useState } from "react"
import Square from "./Square"
import SavedStateSection from "./SavedStatesSection"
import { Keyframes, Frame } from "react-keyframes"
import Red from "../../../assets/images/red.png"
import Streak1 from "../../../assets/images/streak 1.png"
import Streak2 from "../../../assets/images/streak 2.png"
import Streak3 from "../../../assets/images/streak 3.png"
import BP1 from "../../../assets/images/Black Pawn 1.png"
import BP2 from "../../../assets/images/Black Pawn 2.png"
import BP3 from "../../../assets/images/Black Pawn 3.png"
import BP4 from "../../../assets/images/Black Pawn 4.png"
import BP5 from "../../../assets/images/Black Pawn 5.png"
import BP6 from "../../../assets/images/Black Pawn 6.png"
import BP7 from "../../../assets/images/Black Pawn 7.png"
import BP8 from "../../../assets/images/Black Pawn 8.png"
import BP9 from "../../../assets/images/Black Pawn 9.png"
import BP10 from "../../../assets/images/Black Pawn 10.png"
import BP11 from "../../../assets/images/Black Pawn 11.png"
import BP12 from "../../../assets/images/Black Pawn 12.png"
import BP13 from "../../../assets/images/Black Pawn 13.png"
import WP1 from "../../../assets/images/White Pawn 1.png"
import WP2 from "../../../assets/images/White Pawn 2.png"
import WP3 from "../../../assets/images/White Pawn 3.png"
import WP4 from "../../../assets/images/White Pawn 4.png"
import WP5 from "../../../assets/images/White Pawn 5.png"
import WP6 from "../../../assets/images/White Pawn 6.png"
import WP7 from "../../../assets/images/White Pawn 7.png"
import WP8 from "../../../assets/images/White Pawn 8.png"
import WP9 from "../../../assets/images/White Pawn 9.png"
import WP10 from "../../../assets/images/White Pawn 10.png"
import WP11 from "../../../assets/images/White Pawn 11.png"
import WP12 from "../../../assets/images/White Pawn 12.png"
import WP13 from "../../../assets/images/White Pawn 13.png"
import BN1 from "../../../assets/images/Black Knight 1.png"
import BN2 from "../../../assets/images/Black Knight 2.png"
import BN3 from "../../../assets/images/Black Knight 3.png"
import BN4 from "../../../assets/images/Black Knight 4.png"
import BN5 from "../../../assets/images/Black Knight 5.png"
import BN6 from "../../../assets/images/Black Knight 6.png"
import BN7 from "../../../assets/images/Black Knight 7.png"
import BN8 from "../../../assets/images/Black Knight 8.png"
import BN9 from "../../../assets/images/Black Knight 9.png"
import BN10 from "../../../assets/images/Black Knight 10.png"
import BN11 from "../../../assets/images/Black Knight 11.png"
import BN12 from "../../../assets/images/Black Knight 12.png"
import BN13 from "../../../assets/images/Black Knight 13.png"
import BN14 from "../../../assets/images/Black Knight 14.png"
import WN1 from "../../../assets/images/White Knight 1.png"
import WN2 from "../../../assets/images/White Knight 2.png"
import WN3 from "../../../assets/images/White Knight 3.png"
import WN4 from "../../../assets/images/White Knight 4.png"
import WN5 from "../../../assets/images/White Knight 5.png"
import WN6 from "../../../assets/images/White Knight 6.png"
import WN7 from "../../../assets/images/White Knight 7.png"
import WN8 from "../../../assets/images/White Knight 8.png"
import WN9 from "../../../assets/images/White Knight 9.png"
import WN10 from "../../../assets/images/White Knight 10.png"
import WN11 from "../../../assets/images/White Knight 11.png"
import WN12 from "../../../assets/images/White Knight 12.png"
import WN13 from "../../../assets/images/White Knight 13.png"
import WN14 from "../../../assets/images/White Knight 14.png"
import BB1 from "../../../assets/images/Black Bishop 1.png"
import BB2 from "../../../assets/images/Black Bishop 2.png"
import BB3 from "../../../assets/images/Black Bishop 3.png"
import BB4 from "../../../assets/images/Black Bishop 4.png"
import BB5 from "../../../assets/images/Black Bishop 5.png"
import BB6 from "../../../assets/images/Black Bishop 6.png"
import BB7 from "../../../assets/images/Black Bishop 7.png"
import BB8 from "../../../assets/images/Black Bishop 8.png"
import BB9 from "../../../assets/images/Black Bishop 9.png"
import BB10 from "../../../assets/images/Black Bishop 10.png"
import BB11 from "../../../assets/images/Black Bishop 11.png"
import BB12 from "../../../assets/images/Black Bishop 12.png"
import WB1 from "../../../assets/images/White Bishop 1.png"
import WB2 from "../../../assets/images/White Bishop 2.png"
import WB3 from "../../../assets/images/White Bishop 3.png"
import WB4 from "../../../assets/images/White Bishop 4.png"
import WB5 from "../../../assets/images/White Bishop 5.png"
import WB6 from "../../../assets/images/White Bishop 6.png"
import WB7 from "../../../assets/images/White Bishop 7.png"
import WB8 from "../../../assets/images/White Bishop 8.png"
import WB9 from "../../../assets/images/White Bishop 9.png"
import WB10 from "../../../assets/images/White Bishop 10.png"
import WB11 from "../../../assets/images/White Bishop 11.png"
import WB12 from "../../../assets/images/White Bishop 12.png"
import BR1 from "../../../assets/images/Black Rook 1.png"
import BR2 from "../../../assets/images/Black Rook 2.png"
import BR3 from "../../../assets/images/Black Rook 3.png"
import BR4 from "../../../assets/images/Black Rook 4.png"
import BR5 from "../../../assets/images/Black Rook 5.png"
import BR6 from "../../../assets/images/Black Rook 6.png"
import BR7 from "../../../assets/images/Black Rook 7.png"
import BR8 from "../../../assets/images/Black Rook 8.png"
import BR9 from "../../../assets/images/Black Rook 9.png"
import BR10 from "../../../assets/images/Black Rook 10.png"
import BR11 from "../../../assets/images/Black Rook 11.png"
import BR12 from "../../../assets/images/Black Rook 12.png"
import BR13 from "../../../assets/images/Black Rook 13.png"
import BR14 from "../../../assets/images/Black Rook 14.png"
import WR1 from "../../../assets/images/White Rook 1.png"
import WR2 from "../../../assets/images/White Rook 2.png"
import WR3 from "../../../assets/images/White Rook 3.png"
import WR4 from "../../../assets/images/White Rook 4.png"
import WR5 from "../../../assets/images/White Rook 5.png"
import WR6 from "../../../assets/images/White Rook 6.png"
import WR7 from "../../../assets/images/White Rook 7.png"
import WR8 from "../../../assets/images/White Rook 8.png"
import WR9 from "../../../assets/images/White Rook 9.png"
import WR10 from "../../../assets/images/White Rook 10.png"
import WR11 from "../../../assets/images/White Rook 11.png"
import WR12 from "../../../assets/images/White Rook 12.png"
import WR13 from "../../../assets/images/White Rook 13.png"
import WR14 from "../../../assets/images/White Rook 14.png"
import BQ1 from "../../../assets/images/Black Queen 1.png"
import BQ2 from "../../../assets/images/Black Queen 2.png"
import BQ3 from "../../../assets/images/Black Queen 3.png"
import BQ4 from "../../../assets/images/Black Queen 4.png"
import BQ5 from "../../../assets/images/Black Queen 5.png"
import BQ6 from "../../../assets/images/Black Queen 6.png"
import BQ7 from "../../../assets/images/Black Queen 7.png"
import BQ8 from "../../../assets/images/Black Queen 8.png"
import BQ9 from "../../../assets/images/Black Queen 9.png"
import BQ10 from "../../../assets/images/Black Queen 10.png"
import BQ11 from "../../../assets/images/Black Queen 11.png"
import BQ12 from "../../../assets/images/Black Queen 12.png"
import BQ13 from "../../../assets/images/Black Queen 13.png"
import BQ14 from "../../../assets/images/Black Queen 14.png"
import BQ15 from "../../../assets/images/Black Queen 15.png"
import WQ1 from "../../../assets/images/White Queen 1.png"
import WQ2 from "../../../assets/images/White Queen 2.png"
import WQ3 from "../../../assets/images/White Queen 3.png"
import WQ4 from "../../../assets/images/White Queen 4.png"
import WQ5 from "../../../assets/images/White Queen 5.png"
import WQ6 from "../../../assets/images/White Queen 6.png"
import WQ7 from "../../../assets/images/White Queen 7.png"
import WQ8 from "../../../assets/images/White Queen 8.png"
import WQ9 from "../../../assets/images/White Queen 9.png"
import WQ10 from "../../../assets/images/White Queen 10.png"
import WQ11 from "../../../assets/images/White Queen 11.png"
import WQ12 from "../../../assets/images/White Queen 12.png"
import WQ13 from "../../../assets/images/White Queen 13.png"
import WQ14 from "../../../assets/images/White Queen 14.png"
import WQ15 from "../../../assets/images/White Queen 15.png"
import BK1 from "../../../assets/images/Black King 1.png"
import BK2 from "../../../assets/images/Black King 2.png"
import BK3 from "../../../assets/images/Black King 3.png"
import BK4 from "../../../assets/images/Black King 4.png"
import BK5 from "../../../assets/images/Black King 5.png"
import BK6 from "../../../assets/images/Black King 6.png"
import BK7 from "../../../assets/images/Black King 7.png"
import BK8 from "../../../assets/images/Black King 8.png"
import BK9 from "../../../assets/images/Black King 9.png"
import WK1 from "../../../assets/images/White King 1.png"
import WK2 from "../../../assets/images/White King 2.png"
import WK3 from "../../../assets/images/White King 3.png"
import WK4 from "../../../assets/images/White King 4.png"
import WK5 from "../../../assets/images/White King 5.png"
import WK6 from "../../../assets/images/White King 6.png"
import WK7 from "../../../assets/images/White King 7.png"
import WK8 from "../../../assets/images/White King 8.png"
import WK9 from "../../../assets/images/White King 9.png"

const Board = (props) => {
  const defaultBoard = {
    a: ["wr", "wp", null, null, null, null, "bp", "br"],
    b: ["wn", "wp", null, null, null, null, "bp", "bn"],
    c: ["wb", "wp", null, null, null, null, "bp", "bb"],
    d: ["wq", "wp", null, null, null, null, "bp", "bq"],
    e: ["wk", "wp", null, null, null, null, "bp", "bk"],
    f: ["wb", "wp", null, null, null, null, "bp", "bb"],
    g: ["wn", "wp", null, null, null, null, "bp", "bn"],
    h: ["wr", "wp", null, null, null, null, "bp", "br"],
  }
  const [boardState, setBoardState] = useState(defaultBoard)
  const [whatShouldReturn, setWhatShouldReturn] = useState("board")

  let boardData = []
  let columns = ["h", "g", "f", "e", "d", "c", "b", "a"]
  for (let row = 1; row <= 8; row++) {
    columns.forEach((column) => {
      let id = `${column}${row}`

      const selectFirstSquare = () => {
        if (
          boardState[column][row - 1] !== null &&
          props.selectedSquare === null &&
          props.bankSelection === null
        ) {
          props.setSelectedSquare(id)
          props.setLastSelectedPiece(boardState[column][row - 1])
        }

        if (props.selectedSquare == id) {
          props.setSelectedSquare(null)
        }
      }
// look at lesson supplemnts/resources nick shared how to movfe fetch to other files
// applies to other functions with state involved
      const movePiece = () => {
        if (props.selectedSquare !== null) {
          let oldSpace = props.selectedSquare
          let oldSpaceData = oldSpace.split("")
          let pieceOnOldSpace =
            boardState[oldSpaceData[0]][parseInt(oldSpaceData[1]) - 1]

          let newBoard = boardState
          newBoard[oldSpaceData[0]].splice(
            parseInt(oldSpaceData[1] - 1),
            1,
            null
          )
          newBoard[column].splice(row - 1, 1, pieceOnOldSpace)
          
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
          newBoard[column].splice(row - 1, 1, newPiece)

          setBoardState(newBoard)
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
            if (props.lastSelectedPiece === "x" || props.lastSelectedPiece.charAt(0) === "w") {
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
            if (props.lastSelectedPiece === "x" || props.lastSelectedPiece.charAt(0) === "b") {
              setWhatShouldReturn("bk")
            }
          })
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
          checkGameOverWhite={checkGameOverWhite}
          checkGameOverBlack={checkGameOverBlack}
        />
      )
      if (column === "a") {
        boardData.unshift(<br key={`break ${row}`} />)
      }
    })
  }

  const newGame = () => {
    setWhatShouldReturn("board")
    setBoardState(defaultBoard)
  }

  let frames = [
    [BP1, BP2, BP3, BP4, BP5, BP6, BP7, BP8, BP9, BP10, BP11, BP12, BP13],
    [WP1, WP2, WP3, WP4, WP5, WP6, WP7, WP8, WP9, WP10, WP11, WP12, WP13],
    [BN1, BN2, BN3, BN4, BN5, BN6, BN7, BN8, BN9, BN10, BN11, BN12, BN13, BN14],
    [WN1, WN2, WN3, WN4, WN5, WN6, WN7, WN8, WN9, WN10, WN11, WN12, WN13, WN14],
    [BB1, BB2, BB3, BB4, BB5, BB6, BB7, BB8, BB9, BB10, BB11, BB12],
    [WB1, WB2, WB3, WB4, WB5, WB6, WB7, WB8, WB9, WB10, WB11, WB12],
    [BR1, BR2, BR3, BR4, BR5, BR6, BR7, BR8, BR9, BR10, BR11, BR12, BR13, BR14],
    [WR1, WR2, WR3, WR4, WR5, WR6, WR7, WR8, WR9, WR10, WR11, WR12, WR13, WR14],
    [BQ1, BQ2, BQ3, BQ4, BQ5, BQ6, BQ7, BQ8, BQ9, BQ10, BQ11, BQ12, BQ13, BQ14, BQ15],
    [WQ1, WQ2, WQ3, WQ4, WQ5, WQ6, WQ7, WQ8, WQ9, WQ10, WQ11, WQ12, WQ13, WQ14, WQ15],
    [BK1, BK2, BK3, BK4, BK5, BK6, BK7, BK8, BK9],
    [WK1, WK2, WK3, WK4, WK5, WK6, WK7, WK8, WK9],
  ]

  let animations = []

  frames.forEach((piece) => {
    let frameData = []
    frameData.push(
      <Frame duration={200}>
        <img src={Red} />
      </Frame>
    )
    frameData.push(
      <Frame duration={100}>
        <img src={Streak1} />
      </Frame>
    )
    frameData.push(
      <Frame duration={100}>
        <img src={Streak2} />
      </Frame>
    )
    frameData.push(
      <Frame duration={100}>
        <img src={Streak3} />
      </Frame>
    )
    piece.forEach((frame) => {
      frameData.push(
        <Frame duration={100}>
          <img src={frame} />
        </Frame>
      )
    })
    animations.push(frameData)
  })

  let endGameComponents = []

  animations.forEach((animation) => {
    let returnComponent = []
    returnComponent.push(
      <div>
        <Keyframes>{animation}</Keyframes>
        <p id="newGameButton" onClick={newGame}>
          Start a new game!
        </p>
      </div>
    )
    endGameComponents.push(returnComponent)
  })

  let output 

  if (whatShouldReturn === "board") {
    output = ( 
    <>
      <div id="board">{boardData}</div>
      <SavedStateSection
        boardState={boardState}
        setBoardState={setBoardState}
      />
    </>
    )
  } 
  
  let allPieces = ["bp", "wp", "bn", "wn", "bb", "wb", "br", "wr", "bq", "wq", "bk", "wk"]
  let i = 0

  allPieces.forEach(piece => {
    if (whatShouldReturn === piece) {
      output = endGameComponents[i]
    }
    i++
  })

  return output
}

export default Board
