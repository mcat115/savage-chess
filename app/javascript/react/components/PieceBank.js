import React from "react"
import BankIcon from "./BankIcon"

const PieceBank = (props) => {
  const icons = [
    "wp",
    "wn",
    "wb",
    "wr",
    "wq",
    "bp",
    "bn",
    "bb",
    "br",
    "bq",
    "empty",
    "bk",
    "wk",
  ]

  let iconComponents = []

  icons.forEach((piece) => {
    let classContent

    if (props.bankSelection === piece) {
      classContent = "pieceSelected bankIcon"
    } else {
      classContent = "bankIcon"
    }

    const handleClick = () => {
      if (props.selectedSquare === null && props.pauseStatus === "Pause the game!") {
        props.setBankSelection(piece)
        props.setLastSelectedPiece(piece)
      }

      if (props.bankSelection === piece) {
        props.setBankSelection(null)
      }

      if (props.pauseStatus === "Resume the game!") {
        alert("Resume the game to continue!")
      }
    }

    iconComponents.push(
      <BankIcon
        classContent={classContent}
        bankSelection={props.setBankSelection}
        setBankSelection={props.setBankSelection}
        piece={piece}
        key={piece}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div id="pieceBank" className="center">
      <p>Add or remove pieces manually:</p>
      {iconComponents}
    </div>
  )
}

export default PieceBank
