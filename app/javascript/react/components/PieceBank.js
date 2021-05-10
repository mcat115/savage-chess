import React from "react"
import BankIcon from "./BankIcon"

const PieceBank = (props) => {
  
  const icons = ["wp", "wn", "wb", "wr", "wq", "bp", "bn", "bb", "br", "bq", "x", "bk", "wk"]

  let iconComponents = []

  icons.forEach(piece => {

  let classContent

  if (props.bankSelection === piece) {
    classContent = "pieceSelected bankIcon"
  } else {
    classContent = "bankIcon"
  }

  const click = () => {
    if (props.selectedSquare === null) {
      props.setBankSelection(piece)
      props.setLastSelectedPiece(piece)
    }
    
    if (props.bankSelection === piece) {
      props.setBankSelection(null)
    }
  }

    iconComponents.push(
      <BankIcon 
        classContent={classContent}
        bankSelection={props.setBankSelection}
        setBankSelection={props.setBankSelection}
        piece={piece}
        key={piece}
        click={click}
      />
    )
  })

  return (
    <div id="pieceBank">
      <p>Add or remove pieces manually:</p>
      {iconComponents}
    </div>
  )
}

export default PieceBank
