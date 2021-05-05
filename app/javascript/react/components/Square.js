import React from "react"
import LightSquareImage from "../../../assets/images/light-square.png"
import DarkSquareImage from "../../../assets/images/dark-square.png"

const Square = (props) => {

  let id = `${props.column}${props.row}`
  let square = DarkSquareImage
  let lightTiles = []

  for (let i = 1; i <= 8; i++) {
    if (i % 2 === 0) {
      lightTiles.push(`b${i}`)
      lightTiles.push(`d${i}`)
      lightTiles.push(`f${i}`)
      lightTiles.push(`h${i}`)
    } else {
      lightTiles.push(`a${i}`)
      lightTiles.push(`c${i}`)
      lightTiles.push(`e${i}`)
      lightTiles.push(`g${i}`)
    }
  }

  lightTiles.forEach((tile) => {
    if (tile === id) {
      square = LightSquareImage
    }
  })

  let classContent = "tile"

  if (props.selectedSquare === id) {
    classContent = "selected tile"
  } else {
    classContent = "tile"
  }







  const click = (newSpaceColumn = null, newSpaceRow = null) => {

    if ((props.boardState[`${props.column}`][`${props.row - 1}`]) !== null && props.selectedSquare === null) {
      props.setSelectedSquare(id)
    }

    // if (props.selectedSquare !== null) {
    //   let oldSpace = props.selectedSquare
    //   let oldSpaceData = oldSpace.split()
    //   let pieceOnOldSpace = boardState[oldSpaceData(0)][oldSpaceData(1) - 1]

    //   props.setBoardState({
    //     ...boardState,
    //     [`${props.column}.${props.row - 1}`]: null,
    //     [`${newSpaceColumn}.${newSpaceRow}`]: pieceOnOldSpace
    //   })

    //   props.setSelectedSquare(null)
    // }
  }


  // tomorrow - look at setBoardState, break into two differnt onClick functions


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
    <span 
      className="square" 
      onClick={click}
      // onClick={click(props.column, props.row)}
    >
      <img 
        src={square} 
        className={classContent} 
      />
      <i className={iconClass}></i>
    </span>
  )
}

export default Square
