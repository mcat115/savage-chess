import React, { useState } from "react"
import Square from "./Square"
import { Keyframes, Frame } from 'react-keyframes';
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
  const [lastSelectedPiece, setLastSelectedPiece] = useState(null)
  const [whatShouldReturn, setWhatShouldReturn] = useState("board")

  let boardData = []
  let columns = ["h", "g", "f", "e", "d", "c", "b", "a"]
  for (let row = 1; row <= 8; row++) {
    columns.forEach((column) => {

      let id = `${column}${row}`

      const selectFirstSquare = () => {
        if ((boardState[column][row - 1]) !== null && props.selectedSquare === null && props.bankSelection === null) {
          props.setSelectedSquare(id)
          setLastSelectedPiece((boardState[column][row - 1]))
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

      // const resetBoard = () => {
      //   setBoardState({
      //     a: ["wr", "wp", null, null, null, null, "bp", "br"],
      //     b: ["wn", "wp", null, null, null, null, "bp", "bn"],
      //     c: ["wb", "wp", null, null, null, null, "bp", "bb"],
      //     d: ["wq", "wp", null, null, null, null, "bp", "bq"],
      //     e: ["wk", "wp", null, null, null, null, "bp", "bk"],
      //     f: ["wb", "wp", null, null, null, null, "bp", "bb"],
      //     g: ["wn", "wp", null, null, null, null, "bp", "bn"],
      //     h: ["wr", "wp", null, null, null, null, "bp", "br"]
      //   })
      // }

      const checkGameOverWhite = () => {
        let gameOver = true

        columns.forEach(letter => {
          boardState[letter].forEach(square => {
            if (square === "wk") {
              gameOver = false
            }
          })
        })

        if (gameOver === true) {
          if (lastSelectedPiece === "bp") {
            setWhatShouldReturn("bp kill")
          } else if (lastSelectedPiece === "bn") {
            setWhatShouldReturn("bn kill")
          } else if (lastSelectedPiece === "bb") {
            setWhatShouldReturn("bb kill")
          } else if (lastSelectedPiece === "br") {
            setWhatShouldReturn("br kill")
          } else if (lastSelectedPiece === "bq") {
            setWhatShouldReturn("bq kill")
          } else (
            alert("friendly fire/resign placeholder animatinon")
          )
          // resetBoard()
        }
      }

      const checkGameOverBlack = () => {
        let gameOver = true

        columns.forEach(letter => {
          boardState[letter].forEach(square => {
            if (square === "bk") {
              gameOver = false
            }
          })
        })

        if (gameOver === true) {
          if (lastSelectedPiece === "wp") {
            setWhatShouldReturn("wp kill")
          } else if (lastSelectedPiece === "wn") {
            setWhatShouldReturn("wn kill")
          } else if (lastSelectedPiece === "wb") {
            setWhatShouldReturn("wb kill")
          } else if (lastSelectedPiece === "wr") {
            setWhatShouldReturn("wr kill")
          } else if (lastSelectedPiece === "wq") {
            setWhatShouldReturn("wq kill")
          } else (
            alert("friendly fire/resign placeholder animatinon")
          )
          // resetBoard()
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
        boardData.unshift(
          <br key={`break ${row}`}/>
        )
      }
    })
  }


  if (whatShouldReturn === "board") {
    return <div id="board">{boardData}</div>
  } else if (whatShouldReturn === "bp kill") {
    return (
      <Keyframes>
        <Frame duration={250}><img src={Red}/></Frame>
        <Frame duration={80}><img src={Streak1}/></Frame>
        <Frame duration={80}><img src={Streak2}/></Frame>
        <Frame duration={100}><img src={Streak3}/></Frame>
        <Frame duration={100}><img src={BP1}/></Frame>
        <Frame duration={100}><img src={BP2}/></Frame>
        <Frame duration={100}><img src={BP3}/></Frame>
        <Frame duration={100}><img src={BP4}/></Frame>
        <Frame duration={100}><img src={BP5}/></Frame>
        <Frame duration={100}><img src={BP6}/></Frame>
        <Frame duration={100}><img src={BP7}/></Frame>
        <Frame duration={100}><img src={BP8}/></Frame>
        <Frame duration={100}><img src={BP9}/></Frame>
        <Frame duration={100}><img src={BP10}/></Frame>
        <Frame duration={100}><img src={BP11}/></Frame>
        <Frame duration={100}><img src={BP12}/></Frame>
        <Frame duration={100}><img src={BP13}/></Frame>
      </Keyframes>
    )
  } else if (whatShouldReturn === "wp kill") {
    return (
      <Keyframes>
        <Frame duration={250}><img src={Red}/></Frame>
        <Frame duration={80}><img src={Streak1}/></Frame>
        <Frame duration={80}><img src={Streak2}/></Frame>
        <Frame duration={100}><img src={Streak3}/></Frame>
        <Frame duration={100}><img src={WP1}/></Frame>
        <Frame duration={100}><img src={WP2}/></Frame>
        <Frame duration={100}><img src={WP3}/></Frame>
        <Frame duration={100}><img src={WP4}/></Frame>
        <Frame duration={100}><img src={WP5}/></Frame>
        <Frame duration={100}><img src={WP6}/></Frame>
        <Frame duration={100}><img src={WP7}/></Frame>
        <Frame duration={100}><img src={WP8}/></Frame>
        <Frame duration={100}><img src={WP9}/></Frame>
        <Frame duration={100}><img src={WP10}/></Frame>
        <Frame duration={100}><img src={WP11}/></Frame>
        <Frame duration={100}><img src={WP12}/></Frame>
        <Frame duration={100}><img src={WP13}/></Frame>
      </Keyframes>
    )
  } else if (whatShouldReturn === "bn kill") {
    return (
      <Keyframes>
        <Frame duration={250}><img src={Red}/></Frame>
        <Frame duration={80}><img src={Streak1}/></Frame>
        <Frame duration={80}><img src={Streak2}/></Frame>
        <Frame duration={100}><img src={Streak3}/></Frame>
        <Frame duration={100}><img src={BN1}/></Frame>
        <Frame duration={100}><img src={BN2}/></Frame>
        <Frame duration={100}><img src={BN3}/></Frame>
        <Frame duration={100}><img src={BN4}/></Frame>
        <Frame duration={100}><img src={BN5}/></Frame>
        <Frame duration={100}><img src={BN6}/></Frame>
        <Frame duration={100}><img src={BN7}/></Frame>
        <Frame duration={100}><img src={BN8}/></Frame>
        <Frame duration={100}><img src={BN9}/></Frame>
        <Frame duration={100}><img src={BN10}/></Frame>
        <Frame duration={100}><img src={BN11}/></Frame>
        <Frame duration={100}><img src={BN12}/></Frame>
        <Frame duration={100}><img src={BN13}/></Frame>
        <Frame duration={100}><img src={BN14}/></Frame>
      </Keyframes>
    )
  } else if (whatShouldReturn === "wn kill") {
    return (
      <Keyframes>
        <Frame duration={250}><img src={Red}/></Frame>
        <Frame duration={80}><img src={Streak1}/></Frame>
        <Frame duration={80}><img src={Streak2}/></Frame>
        <Frame duration={100}><img src={Streak3}/></Frame>
        <Frame duration={100}><img src={WN1}/></Frame>
        <Frame duration={100}><img src={WN2}/></Frame>
        <Frame duration={100}><img src={WN3}/></Frame>
        <Frame duration={100}><img src={WN4}/></Frame>
        <Frame duration={100}><img src={WN5}/></Frame>
        <Frame duration={100}><img src={WN6}/></Frame>
        <Frame duration={100}><img src={WN7}/></Frame>
        <Frame duration={100}><img src={WN8}/></Frame>
        <Frame duration={100}><img src={WN9}/></Frame>
        <Frame duration={100}><img src={WN10}/></Frame>
        <Frame duration={100}><img src={WN11}/></Frame>
        <Frame duration={100}><img src={WN12}/></Frame>
        <Frame duration={100}><img src={WN13}/></Frame>
        <Frame duration={100}><img src={WN14}/></Frame>
      </Keyframes>
    )
  } else if (whatShouldReturn === "bb kill") {
    return (
      <Keyframes>
        <Frame duration={250}><img src={Red}/></Frame>
        <Frame duration={80}><img src={Streak1}/></Frame>
        <Frame duration={80}><img src={Streak2}/></Frame>
        <Frame duration={100}><img src={Streak3}/></Frame>
        <Frame duration={100}><img src={BB1}/></Frame>
        <Frame duration={100}><img src={BB2}/></Frame>
        <Frame duration={100}><img src={BB3}/></Frame>
        <Frame duration={100}><img src={BB4}/></Frame>
        <Frame duration={100}><img src={BB5}/></Frame>
        <Frame duration={100}><img src={BB6}/></Frame>
        <Frame duration={100}><img src={BB7}/></Frame>
        <Frame duration={100}><img src={BB8}/></Frame>
        <Frame duration={100}><img src={BB9}/></Frame>
        <Frame duration={100}><img src={BB10}/></Frame>
        <Frame duration={100}><img src={BB11}/></Frame>
        <Frame duration={100}><img src={BB12}/></Frame>
      </Keyframes>
    )
  } else if (whatShouldReturn === "wb kill") {
    return (
      <Keyframes>
        <Frame duration={250}><img src={Red}/></Frame>
        <Frame duration={80}><img src={Streak1}/></Frame>
        <Frame duration={80}><img src={Streak2}/></Frame>
        <Frame duration={100}><img src={Streak3}/></Frame>
        <Frame duration={100}><img src={WB1}/></Frame>
        <Frame duration={100}><img src={WB2}/></Frame>
        <Frame duration={100}><img src={WB3}/></Frame>
        <Frame duration={100}><img src={WB4}/></Frame>
        <Frame duration={100}><img src={WB5}/></Frame>
        <Frame duration={100}><img src={WB6}/></Frame>
        <Frame duration={100}><img src={WB7}/></Frame>
        <Frame duration={100}><img src={WB8}/></Frame>
        <Frame duration={100}><img src={WB9}/></Frame>
        <Frame duration={100}><img src={WB10}/></Frame>
        <Frame duration={100}><img src={WB11}/></Frame>
        <Frame duration={100}><img src={WB12}/></Frame>
      </Keyframes>
    )
  } else if (whatShouldReturn === "br kill") {
    return (
      <Keyframes>
        <Frame duration={250}><img src={Red}/></Frame>
        <Frame duration={80}><img src={Streak1}/></Frame>
        <Frame duration={80}><img src={Streak2}/></Frame>
        <Frame duration={100}><img src={Streak3}/></Frame>
        <Frame duration={100}><img src={BR1}/></Frame>
        <Frame duration={100}><img src={BR2}/></Frame>
        <Frame duration={100}><img src={BR3}/></Frame>
        <Frame duration={100}><img src={BR4}/></Frame>
        <Frame duration={100}><img src={BR5}/></Frame>
        <Frame duration={100}><img src={BR6}/></Frame>
        <Frame duration={100}><img src={BR7}/></Frame>
        <Frame duration={100}><img src={BR8}/></Frame>
        <Frame duration={100}><img src={BR9}/></Frame>
        <Frame duration={100}><img src={BR10}/></Frame>
        <Frame duration={100}><img src={BR11}/></Frame>
        <Frame duration={100}><img src={BR12}/></Frame>
        <Frame duration={100}><img src={BR13}/></Frame>
        <Frame duration={100}><img src={BR14}/></Frame>
      </Keyframes>
    )
  } else if (whatShouldReturn === "wr kill") {
    return (
      <Keyframes>
        <Frame duration={250}><img src={Red}/></Frame>
        <Frame duration={80}><img src={Streak1}/></Frame>
        <Frame duration={80}><img src={Streak2}/></Frame>
        <Frame duration={100}><img src={Streak3}/></Frame>
        <Frame duration={100}><img src={WR1}/></Frame>
        <Frame duration={100}><img src={WR2}/></Frame>
        <Frame duration={100}><img src={WR3}/></Frame>
        <Frame duration={100}><img src={WR4}/></Frame>
        <Frame duration={100}><img src={WR5}/></Frame>
        <Frame duration={100}><img src={WR6}/></Frame>
        <Frame duration={100}><img src={WR7}/></Frame>
        <Frame duration={100}><img src={WR8}/></Frame>
        <Frame duration={100}><img src={WR9}/></Frame>
        <Frame duration={100}><img src={WR10}/></Frame>
        <Frame duration={100}><img src={WR11}/></Frame>
        <Frame duration={100}><img src={WR12}/></Frame>
        <Frame duration={100}><img src={WR13}/></Frame>
        <Frame duration={100}><img src={WR14}/></Frame>
      </Keyframes>
    )
  } else if (whatShouldReturn === "bq kill") {
    return (
      <Keyframes>
        <Frame duration={250}><img src={Red}/></Frame>
        <Frame duration={80}><img src={Streak1}/></Frame>
        <Frame duration={80}><img src={Streak2}/></Frame>
        <Frame duration={100}><img src={Streak3}/></Frame>
        <Frame duration={100}><img src={BQ1}/></Frame>
        <Frame duration={100}><img src={BQ2}/></Frame>
        <Frame duration={100}><img src={BQ3}/></Frame>
        <Frame duration={100}><img src={BQ4}/></Frame>
        <Frame duration={100}><img src={BQ5}/></Frame>
        <Frame duration={100}><img src={BQ6}/></Frame>
        <Frame duration={100}><img src={BQ7}/></Frame>
        <Frame duration={100}><img src={BQ8}/></Frame>
        <Frame duration={100}><img src={BQ9}/></Frame>
        <Frame duration={100}><img src={BQ10}/></Frame>
        <Frame duration={100}><img src={BQ11}/></Frame>
        <Frame duration={100}><img src={BQ12}/></Frame>
        <Frame duration={100}><img src={BQ13}/></Frame>
        <Frame duration={100}><img src={BQ14}/></Frame>
      </Keyframes>
    )
  } else if (whatShouldReturn === "wq kill") {
    return (
      <Keyframes>
        <Frame duration={250}><img src={Red}/></Frame>
        <Frame duration={80}><img src={Streak1}/></Frame>
        <Frame duration={80}><img src={Streak2}/></Frame>
        <Frame duration={100}><img src={Streak3}/></Frame>
        <Frame duration={100}><img src={WQ1}/></Frame>
        <Frame duration={100}><img src={WQ2}/></Frame>
        <Frame duration={100}><img src={WQ3}/></Frame>
        <Frame duration={100}><img src={WQ4}/></Frame>
        <Frame duration={100}><img src={WQ5}/></Frame>
        <Frame duration={100}><img src={WQ6}/></Frame>
        <Frame duration={100}><img src={WQ7}/></Frame>
        <Frame duration={100}><img src={WQ8}/></Frame>
        <Frame duration={100}><img src={WQ9}/></Frame>
        <Frame duration={100}><img src={WQ10}/></Frame>
        <Frame duration={100}><img src={WQ11}/></Frame>
        <Frame duration={100}><img src={WQ12}/></Frame>
        <Frame duration={100}><img src={WQ13}/></Frame>
        <Frame duration={100}><img src={WQ14}/></Frame>
      </Keyframes>
    )
  }
}

export default Board
