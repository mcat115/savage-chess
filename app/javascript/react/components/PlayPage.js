import React, { useState } from "react"
import Board from "./Board"
import PieceBank from "./PieceBank"
import MeetingButton from "./MeetingButton"

const PlayPage = () => {
  const [bankSelection, setBankSelection] = useState(null)
  const [selectedSquare, setSelectedSquare] = useState(null)

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell small-6 medium-3 playWords">
        <p>Point and click!</p>
          <MeetingButton/>
        </div>
        <div className="cell small-12 medium-6">
          <Board
            bankSelection={bankSelection}
            setBankSelection={setBankSelection}
            selectedSquare={selectedSquare}
            setSelectedSquare={setSelectedSquare}
          />
        </div>
        <div className="cell small-6 medium-3 playWords"> 
          <p>To resign, X out your own king!</p>
          <PieceBank
            bankSelection={bankSelection}
            setBankSelection={setBankSelection}
            selectedSquare={selectedSquare}
            setSelectedSquare={setSelectedSquare}
          />
        </div>
      </div>
    </div>
  )
}

export default PlayPage