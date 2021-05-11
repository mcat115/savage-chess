import React, { useState } from "react"
import Board from "./Board"
import PieceBank from "./PieceBank"
import MeetingButton from "./MeetingButton"

const PlayPage = () => {
  const [bankSelection, setBankSelection] = useState(null)
  const [selectedSquare, setSelectedSquare] = useState(null)
  const [lastSelectedPiece, setLastSelectedPiece] = useState(null)


  return (
    <div className="grid-container playPageFull">
      <div className="grid-x">
        <div className="cell small-6 medium-3">
        <p className="playWords">Point and click!</p>
          <MeetingButton/>
        </div>
        <div className="cell small-12 medium-6">
          <Board
            bankSelection={bankSelection}
            setBankSelection={setBankSelection}
            selectedSquare={selectedSquare}
            setSelectedSquare={setSelectedSquare}
            lastSelectedPiece={lastSelectedPiece}
            setLastSelectedPiece={setLastSelectedPiece}
          />
        </div>
        <div className="cell small-6 medium-3"> 
          <p className="playWords">To resign, X out your own king!</p>
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