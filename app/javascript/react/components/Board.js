import React, { useState } from "react"
import Square from "./Square"
import SavedStateSection from "./SavedStatesSection"
import { Keyframes, Frame } from "react-keyframes"
import Red from "../../../assets/images/red.png"
import Streak1 from "../../../assets/images/streak 1.png"
import Streak2 from "../../../assets/images/streak 2.png"
import Streak3 from "../../../assets/images/streak 3.png"

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

  const newGame = () => {
    setWhatShouldReturn("board")
    setBoardState(defaultBoard)
  }

  const importFrames = (r) => {
    let images = {}
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); })
    return images
    // return r.keys().map(r)
  }
  
  const frameImports = importFrames(require.context('../../../assets/images/frames', false, /\.(png)$/))

  let frames = [
    [frameImports["BP1.png"], frameImports["BP2.png"], frameImports["BP3.png"], frameImports["BP4.png"], frameImports["BP5.png"], frameImports["BP6.png"], frameImports["BP7.png"], frameImports["BP8.png"], frameImports["BP9.png"], frameImports["BP10.png"], frameImports["BP11.png"], frameImports["BP12.png"], frameImports["BP13.png"]],
    [frameImports["WP1.png"], frameImports["WP2.png"], frameImports["WP3.png"], frameImports["WP4.png"], frameImports["WP5.png"], frameImports["WP6.png"], frameImports["WP7.png"], frameImports["WP8.png"], frameImports["WP9.png"], frameImports["WP10.png"], frameImports["WP11.png"], frameImports["WP12.png"], frameImports["WP13.png"]],
    [frameImports["BN1.png"], frameImports["BN2.png"], frameImports["BN3.png"], frameImports["BN4.png"], frameImports["BN5.png"], frameImports["BN6.png"], frameImports["BN7.png"], frameImports["BN8.png"], frameImports["BN9.png"], frameImports["BN10.png"], frameImports["BN11.png"], frameImports["BN12.png"], frameImports["BN13.png"], frameImports["BN14.png"]],
    [frameImports["WN1.png"], frameImports["WN2.png"], frameImports["WN3.png"], frameImports["WN4.png"], frameImports["WN5.png"], frameImports["WN6.png"], frameImports["WN7.png"], frameImports["WN8.png"], frameImports["WN9.png"], frameImports["WN10.png"], frameImports["WN11.png"], frameImports["WN12.png"], frameImports["WN13.png"], frameImports["WN14.png"]],
    [frameImports["BB1.png"], frameImports["BB2.png"], frameImports["BB3.png"], frameImports["BB4.png"], frameImports["BB5.png"], frameImports["BB6.png"], frameImports["BB7.png"], frameImports["BB8.png"], frameImports["BB9.png"], frameImports["BB10.png"], frameImports["BB11.png"], frameImports["BB12.png"]],
    [frameImports["WB1.png"], frameImports["WB2.png"], frameImports["WB3.png"], frameImports["WB4.png"], frameImports["WB5.png"], frameImports["WB6.png"], frameImports["WB7.png"], frameImports["WB8.png"], frameImports["WB9.png"], frameImports["WB10.png"], frameImports["WB11.png"], frameImports["WB12.png"]],
    [frameImports["BR1.png"], frameImports["BR1.png"], frameImports["BR1.png"], frameImports["BR1.png"], frameImports["BR1.png"], frameImports["BR1.png"], frameImports["BR1.png"], frameImports["BR1.png"], frameImports["BR1.png"], frameImports["BR1.png"], frameImports["BR1.png"], frameImports["BR1.png"], frameImports["BR1.png"], frameImports["BR1.png"]],
    [frameImports["WR1.png"], frameImports["WR2.png"], frameImports["WR3.png"], frameImports["WR4.png"], frameImports["WR5.png"], frameImports["WR6.png"], frameImports["WR7.png"], frameImports["WR8.png"], frameImports["WR9.png"], frameImports["WR10.png"], frameImports["WR11.png"], frameImports["WR12.png"], frameImports["WR13.png"], frameImports["WR14.png"]],
    [frameImports["BQ1.png"], frameImports["BQ2.png"], frameImports["BQ3.png"], frameImports["BQ4.png"], frameImports["BQ5.png"], frameImports["BQ6.png"], frameImports["BQ7.png"], frameImports["BQ8.png"], frameImports["BQ9.png"], frameImports["BQ10.png"], frameImports["BQ11.png"], frameImports["BQ12.png"], frameImports["BQ13.png"], frameImports["BQ14.png"], frameImports["BQ15.png"]],
    [frameImports["WQ1.png"], frameImports["WQ2.png"], frameImports["WQ3.png"], frameImports["WQ4.png"], frameImports["WQ5.png"], frameImports["WQ6.png"], frameImports["WQ7.png"], frameImports["WQ8.png"], frameImports["WQ9.png"], frameImports["WQ10.png"], frameImports["WQ11.png"], frameImports["WQ12.png"], frameImports["WQ13.png"], frameImports["WQ14.png"], frameImports["WQ15.png"]],
    [frameImports["BK1.png"], frameImports["BK2.png"], frameImports["BK3.png"], frameImports["BK4.png"], frameImports["BK5.png"], frameImports["BK6.png"], frameImports["BK7.png"], frameImports["BK8.png"], frameImports["BK9.png"]],
    [frameImports["WK1.png"], frameImports["WK2.png"], frameImports["WK3.png"], frameImports["WK4.png"], frameImports["WK5.png"], frameImports["WK6.png"], frameImports["WK7.png"], frameImports["WK8.png"], frameImports["WK9.png"]],
  ] 

  // let frames = [
  //   [BP1, BP2, BP3, BP4, BP5, BP6, BP7, BP8, BP9, BP10, BP11, BP12, BP13],
  //   [WP1, WP2, WP3, WP4, WP5, WP6, WP7, WP8, WP9, WP10, WP11, WP12, WP13],
  //   [BN1, BN2, BN3, BN4, BN5, BN6, BN7, BN8, BN9, BN10, BN11, BN12, BN13, BN14],
  //   [WN1, WN2, WN3, WN4, WN5, WN6, WN7, WN8, WN9, WN10, WN11, WN12, WN13, WN14],
  //   [BB1, BB2, BB3, BB4, BB5, BB6, BB7, BB8, BB9, BB10, BB11, BB12],
  //   [WB1, WB2, WB3, WB4, WB5, WB6, WB7, WB8, WB9, WB10, WB11, WB12],
  //   [BR1, BR2, BR3, BR4, BR5, BR6, BR7, BR8, BR9, BR10, BR11, BR12, BR13, BR14],
  //   [WR1, WR2, WR3, WR4, WR5, WR6, WR7, WR8, WR9, WR10, WR11, WR12, WR13, WR14],
  //   [BQ1, BQ2, BQ3, BQ4, BQ5, BQ6, BQ7, BQ8, BQ9, BQ10, BQ11, BQ12, BQ13, BQ14, BQ15],
  //   [WQ1, WQ2, WQ3, WQ4, WQ5, WQ6, WQ7, WQ8, WQ9, WQ10, WQ11, WQ12, WQ13, WQ14, WQ15],
  //   [BK1, BK2, BK3, BK4, BK5, BK6, BK7, BK8, BK9],
  //   [WK1, WK2, WK3, WK4, WK5, WK6, WK7, WK8, WK9],
  // ]

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

  const click = () => {
    if (perspective === "white") {
      setPerspective("black")
    } else {
      setPerspective("white")
    }
  }

  if (whatShouldReturn === "board") {
    output = (
      <>
        <p onClick={click} id="flip">
          {" "}
          Flip the board perspective!
        </p>
        <div id="board">{boardData}</div>
        <SavedStateSection
          boardState={boardState}
          setBoardState={setBoardState}
        />
      </>
    )
  }

  let allPieces = [
    "bp",
    "wp",
    "bn",
    "wn",
    "bb",
    "wb",
    "br",
    "wr",
    "bq",
    "wq",
    "bk",
    "wk",
  ]
  let i = 0

  allPieces.forEach((piece) => {
    if (whatShouldReturn === piece) {
      output = endGameComponents[i]
    }
    i++
  })

  return output
}

export default Board
