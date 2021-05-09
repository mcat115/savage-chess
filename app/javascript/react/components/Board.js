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
            alert("friendly fire/kill before game starts placeholder animatinon")
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
            alert("friendly fire/kill before game starts placeholder animatinon")
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
  }
}

export default Board
