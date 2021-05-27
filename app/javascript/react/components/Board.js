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
    h: ["wr", "wp", "empty", "empty", "empty", "empty", "bp", "br"]
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
    let imports = {}
    r.keys().map((item) => {
      imports[item.replace("./", "")] = r(item)
    })
    return imports
  }

  const frameImports = importFrames(
    require.context("../../../assets/images/frames", false, /\.(png)$/)
  )

  let frames = [[], [], [], [], [], [], [], [], [], [], [], []]

  Object.keys(frameImports).forEach((key) => {
    if (key.includes("BP")) {
      frames[0].push(frameImports[key])
    } else if (key.includes("WP")) {
      frames[1].push(frameImports[key])
    } else if (key.includes("BN")) {
      frames[2].push(frameImports[key])
    } else if (key.includes("WN")) {
      frames[3].push(frameImports[key])
    } else if (key.includes("BB")) {
      frames[4].push(frameImports[key])
    } else if (key.includes("WB")) {
      frames[5].push(frameImports[key])
    } else if (key.includes("BR")) {
      frames[6].push(frameImports[key])
    } else if (key.includes("WR")) {
      frames[7].push(frameImports[key])
    } else if (key.includes("BQ")) {
      frames[8].push(frameImports[key])
    } else if (key.includes("WQ")) {
      frames[9].push(frameImports[key])
    } else if (key.includes("BK")) {
      frames[10].push(frameImports[key])
    } else {
      frames[11].push(frameImports[key])
    }
  })

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
