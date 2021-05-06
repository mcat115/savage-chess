import React from "react"
import BankIcon from "./BankIcon"

const PieceBank = (props) => {
  
  const icons = ["wp", "wn", "wb", "wr", "wq", "bp", "bn", "bb", "br", "bq", "x"]

  let iconComponents = []

  icons.forEach(piece => {

  let classContent

  if (props.bankSelection === piece) {
    classContent = "pieceSelected bankPointer"
  } else {
    classContent = "bankPointer"
  }

  const click = () => {
    if (props.selectedSquare === null) {
      props.setBankSelection(piece)
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
