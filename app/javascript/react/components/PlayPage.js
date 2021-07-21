import React, { useState } from "react"
import Board from "./Board"
import PieceBank from "./PieceBank"
import PauseButton from "./PauseButton"

const PlayPage = () => {
  const [bankSelection, setBankSelection] = useState(null)
  const [selectedSquare, setSelectedSquare] = useState(null)
  const [lastSelectedPiece, setLastSelectedPiece] = useState(null)

  return (
    <div className="grid-container playPageFull">
      <div className="grid-x">
        <div className="text-center cell small-12 large-3">
          <p className="playWords center">Point and click!</p>
          <PauseButton />
        </div>
        <div className="cell small-12 large-6">
          <Board
            bankSelection={bankSelection}
            setBankSelection={setBankSelection}
            selectedSquare={selectedSquare}
            setSelectedSquare={setSelectedSquare}
            lastSelectedPiece={lastSelectedPiece}
            setLastSelectedPiece={setLastSelectedPiece}
          />
        </div>
        <div className="text-center cell small-12 large-3">
          <p className="playWords center">To resign, X out your own king!</p>
          <PieceBank
            bankSelection={bankSelection}
            setBankSelection={setBankSelection}
            selectedSquare={selectedSquare}
            setSelectedSquare={setSelectedSquare}
            setLastSelectedPiece={setLastSelectedPiece}
          />
        </div>
      </div>
    </div>
  )
}

export default PlayPage
