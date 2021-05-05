import React from "react"

const BankIcon = (props) => {

  let piece = props.piece

  const click = () => {
    props.setBankSelection(piece)
    if (props.bankSelection === piece) {
      props.setBankSelection(null)
    }
  }

  let iconClass 
  if (piece === "wp") {
    iconClass = `${props.classContent} white fas fa-chess-pawn fa-2x`
  } else if (piece === "bp") {
    iconClass = `${props.classContent} fas fa-chess-pawn fa-2x`
  } else if (piece === "wr") {
    iconClass = `${props.classContent} white fas fa-chess-rook fa-2x`
  } else if (piece === "br") {
    iconClass = `${props.classContent} fas fa-chess-rook fa-2x`
  } else if (piece === "wn") {
    iconClass = `${props.classContent} white fas fa-chess-knight fa-2x`
  } else if (piece === "bn") {
    iconClass = `${props.classContent} fas fa-chess-knight fa-2x`
  } else if (piece === "wb") {
    iconClass = `${props.classContent} white fas fa-chess-bishop fa-2x`
  } else if (piece === "bb") {
    iconClass = `${props.classContent} fas fa-chess-bishop fa-2x`
  } else if (piece === "wq") {
    iconClass = `${props.classContent} white fas fa-chess-queen fa-2x`
  } else if (piece === "bq") {
    iconClass = `${props.classContent} fas fa-chess-queen fa-2x`
  } else if (piece === "wk") {
    iconClass = `${props.classContent} white fas fa-chess-king fa-2x`
  } else if (piece === "bk") {
    iconClass = `${props.classContent} fas fa-chess-king fa-2x`
  }

  return (
    <i className={iconClass} onClick={click}></i>
  )
}

export default BankIcon