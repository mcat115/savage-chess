import React, { useState } from "react"
import Board from "./Board"
import PieceBank from "./PieceBank"

const PlayPage = () => {

  const [bankSelection, setBankSelection] = useState(null)

  return (
    <div>
      <Board/>
      <PieceBank
        bankSelection={bankSelection}
        setBankSelection={setBankSelection}
      />
    </div>
  )
}

export default PlayPage