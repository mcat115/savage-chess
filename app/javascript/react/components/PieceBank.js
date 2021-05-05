import React from "react"
import BankIcon from "./BankIcon"

const PieceBank = (props) => {
  
  const pieces = ["wp", "wn", "wb", "wr", "wq", "bp", "bn", "bb", "br", "bq"]

  let icons = []

  pieces.forEach(piece => {

  let classContent

  if (props.bankSelection === piece) {
    classContent = "pieceSelected"
  } else {
    classContent = ""
  }

    icons.push(
      <BankIcon 
        classContent={classContent}
        bankSelection={props.setBankSelection}
        setBankSelection={props.setBankSelection}
        piece={piece}
        key={piece}
      />
    )
  })

  return (
    <div className="pieceBank">
      {icons}
    </div>
  )
}

export default PieceBank
