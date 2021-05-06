import React, { useState } from "react"
import Board from "./Board"
import PieceBank from "./PieceBank"

const PlayPage = () => {
  const [bankSelection, setBankSelection] = useState(null)
  const [selectedSquare, setSelectedSquare] = useState(null)

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell small-12 medium-2 large-3">
          {/* <MeetingButton/> */}
        </div>
        <div className="cell small-12 medium-8 large-6">
          <Board
            bankSelection={bankSelection}
            setBankSelection={setBankSelection}
            selectedSquare={selectedSquare}
            setSelectedSquare={setSelectedSquare}
          />
        </div>
        <div className="cell small-12 medium-2 large-3"> 
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