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

  const click = () => {
    props.setSelectedSquare(id)
  }

  return (
  <img 
    src={square} 
    id={id}
    className={classContent}
    onClick={click} 
  />)
}

export default Square
