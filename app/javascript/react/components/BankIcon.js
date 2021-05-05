import React from "react"

const BankIcon = (props) => {

  let iconClass 
  if (props.piece === "wp") {
    iconClass = `${props.classContent} white fas fa-chess-pawn fa-2x`
  } else if (props.piece === "bp") {
    iconClass = `${props.classContent} fas fa-chess-pawn fa-2x`
  } else if (props.piece === "wr") {
    iconClass = `${props.classContent} white fas fa-chess-rook fa-2x`
  } else if (props.piece === "br") {
    iconClass = `${props.classContent} fas fa-chess-rook fa-2x`
  } else if (props.piece === "wn") {
    iconClass = `${props.classContent} white fas fa-chess-knight fa-2x`
  } else if (props.piece === "bn") {
    iconClass = `${props.classContent} fas fa-chess-knight fa-2x`
  } else if (props.piece === "wb") {
    iconClass = `${props.classContent} white fas fa-chess-bishop fa-2x`
  } else if (props.piece === "bb") {
    iconClass = `${props.classContent} fas fa-chess-bishop fa-2x`
  } else if (props.piece === "wq") {
    iconClass = `${props.classContent} white fas fa-chess-queen fa-2x`
  } else if (props.piece === "bq") {
    iconClass = `${props.classContent} fas fa-chess-queen fa-2x`
  } else if (props.piece === "wk") {
    iconClass = `${props.classContent} white fas fa-chess-king fa-2x`
  } else if (props.piece === "bk") {
    iconClass = `${props.classContent} fas fa-chess-king fa-2x`
  } else if (props.piece === "x") {
    iconClass = `${props.classContent} x fas fa-times fa-2x`
  }

  return (
    <i className={iconClass} onClick={props.click}></i>
  )
}

export default BankIcon