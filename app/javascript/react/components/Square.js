import React from "react"
import LightSquareImage from "../../../assets/images/light-square.png"
import DarkSquareImage from "../../../assets/images/dark-square.png"

const Square = (props) => {
  let id = `${props.column}${props.row}`
  let square = DarkSquareImage
  let lightTiles = ["a1", "a3", "a5", "a7", "b2", "b4", "b6", "b8", "c1", 
  "c3", "c5", "c7", "d2", "d4", "d6", "d8", "e1", "e3", "e5", "e7", "f2", 
  "f4", "f6", "f8", "g1", "g3", "g5", "g7", "h2", "h4", "h6", "h8"]

  if (lightTiles.includes(id)) {
    square = LightSquareImage
  }

  let classContent = "tile"

  if (props.selectedSquare === id) {
    classContent = "selected tile"
  } 

  const handleClick = () => {
    if (props.selectFirstSquare() !== "no change") {
      props.movePiece()
      props.addPiece()
      props.checkGameOver("wk", ["bp", "bn", "bb", "br", "bq", "bk"])
      props.checkGameOver("bk", ["wp", "wn", "wb", "wr", "wq", "wk"])
    }
  }

  let piece = props.boardState[`${props.column}`][`${props.row - 1}`]

  let iconClass
  if (piece === "wp") {
    iconClass = "white fas fa-chess-pawn fa-2x"
  } else if (piece === "bp") {
    iconClass = "fas fa-chess-pawn fa-2x"
  } else if (piece === "wr") {
    iconClass = "white fas fa-chess-rook fa-2x"
  } else if (piece === "br") {
    iconClass = "fas fa-chess-rook fa-2x"
  } else if (piece === "wn") {
    iconClass = "white fas fa-chess-knight fa-2x"
  } else if (piece === "bn") {
    iconClass = "fas fa-chess-knight fa-2x"
  } else if (piece === "wb") {
    iconClass = "white fas fa-chess-bishop fa-2x"
  } else if (piece === "bb") {
    iconClass = "fas fa-chess-bishop fa-2x"
  } else if (piece === "wq") {
    iconClass = "white fas fa-chess-queen fa-2x"
  } else if (piece === "bq") {
    iconClass = "fas fa-chess-queen fa-2x"
  } else if (piece === "wk") {
    iconClass = "white fas fa-chess-king fa-2x"
  } else if (piece === "bk") {
    iconClass = "fas fa-chess-king fa-2x"
  }

  return (
    <span className="square" onClick={handleClick}>
      <img src={square} className={classContent} />
      <i className={iconClass}></i>
    </span>
  )
}

export default Square
