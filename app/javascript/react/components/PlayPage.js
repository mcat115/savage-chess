import React, { useState } from "react"
import Board from "./Board"
import PieceBank from "./PieceBank"

const PlayPage = () => {
  const [bankSelection, setBankSelection] = useState(null)
  const [selectedSquare, setSelectedSquare] = useState(null)

  return (
    <div>
      <Board
        bankSelection={bankSelection}
        setBankSelection={setBankSelection}
        selectedSquare={selectedSquare}
        setSelectedSquare={setSelectedSquare}
      />
      <PieceBank
        bankSelection={bankSelection}
        setBankSelection={setBankSelection}
        selectedSquare={selectedSquare}
        setSelectedSquare={setSelectedSquare}
      />
    </div>
  )
}

export default PlayPage