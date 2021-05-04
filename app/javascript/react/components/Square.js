import React, { useState } from "react"
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

  const click = () => {
    props.setSelectedSquare(id)
  }




// CHNAGE TILE BASED ON STATE FROM BOARD, WHICH WILL CHANGE BASED ON THE CLICK OF A TILE HERE




  let piece 
 



  if (props.boardState.gameStarted === false) {
    if (props.row == 2) {
      piece = "wp"
    }
    if (props.row == 7) {
      piece = "bp"
    }
    if (id === "a1" || id === "h1") {
      piece = "wr"
    }
    if (id === "a8" || id === "h8") {
      piece = "br"
    }
    if (id === "b1" || id === "g1") {
      piece = "wn"
    }
    if (id === "b8" || id === "g8") {
      piece = "bn"
    }
    if (id === "c1" || id === "f1") {
      piece = "wb"
    }
    if (id === "c8" || id === "f8") {
      piece = "bb"
    }
    if (id === "e1") {
      piece = "wk"
    }
    if (id === "d1") {
      piece = "wq"
    }
    if (id === "e8") {
      piece = "bk"
    }
    if (id === "d8") {
      piece = "bq"
    }
  }




  let iconClass
  if (piece === "wp") {
    iconClass = "white fas fa-chess-pawn"
  } else if (piece === "bp") {
    iconClass = "fas fa-chess-pawn"
  } else if (piece === "wr") {
    iconClass = "white fas fa-chess-rook"
  } else if (piece === "br") {
    iconClass = "fas fa-chess-rook"
  } else if (piece === "wn") {
    iconClass = "white fas fa-chess-knight"
  } else if (piece === "bn") {
    iconClass = "fas fa-chess-knight"
  } else if (piece === "wb") {
    iconClass = "white fas fa-chess-bishop"
  } else if (piece === "bb") {
    iconClass = "fas fa-chess-bishop"
  } else if (piece === "wq") {
    iconClass = "white fas fa-chess-queen"
  } else if (piece === "bq") {
    iconClass = "fas fa-chess-queen"
  } else if (piece === "wk") {
    iconClass = "white fas fa-chess-king"
  } else if (piece === "bk") {
    iconClass = "fas fa-chess-king"
  }

  return (
    <span 
      className="square" 
      id={id} 
      onClick={click}
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
