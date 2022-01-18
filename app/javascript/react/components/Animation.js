import React from 'react'
import { Keyframes, Frame } from "react-keyframes"
import Red from "../../../assets/images/red.png"
import Streak1 from "../../../assets/images/streak 1.png"
import Streak2 from "../../../assets/images/streak 2.png"
import Streak3 from "../../../assets/images/streak 3.png"

const Animation = (props) => {
  const importFrames = (data) => {
    let imports = {}
    data.keys().map((item) => {
      imports[item.replace("./", "")] = data(item)
    })
    return imports
  }

  const frameImports = importFrames(
    require.context("../../../assets/images/frames", false, /\.(png)$/)
  )

  let frames = [[], [], [], [], [], [], [], [], [], [], [], []]
  let allPieces = [
    "bp",
    "wp",
    "bn",
    "wn",
    "bb",
    "wb",
    "br",
    "wr",
    "bq",
    "wq",
    "bk",
    "wk",
  ]

  Object.keys(frameImports).forEach((key) => {
    allPieces.forEach((piece, index) => { 
      if (key.includes(piece)) {
        frames[index].push(frameImports[key])
      }
    })
  })

  let animations = []

  frames.forEach((piece) => {
    let frameData = []
    frameData.push(
      <Frame duration={200}>
        <img src={Red} />
      </Frame>
    )
    frameData.push(
      <Frame duration={100}>
        <img src={Streak1} />
      </Frame>
    )
    frameData.push(
      <Frame duration={100}>
        <img src={Streak2} />
      </Frame>
    )
    frameData.push(
      <Frame duration={100}>
        <img src={Streak3} />
      </Frame>
    )
    piece.forEach((frame) => {
      frameData.push(
        <Frame duration={100}>
          <img src={frame} />
        </Frame>
      )
    })
    animations.push(frameData)
  })

  let endGameComponents = []

  const newGame = () => {
    props.setWhatShouldReturn("board")
    props.setBoardState(props.defaultBoard)
  }

  animations.forEach((animation) => {
    let returnComponent = []
    returnComponent.push(
      <div>
        <Keyframes>{animation}</Keyframes>
        <p id="newGameButton" className="center" onClick={newGame}>
          Start a new game!
        </p>
      </div>
    )
    endGameComponents.push(returnComponent)
  })

  let output

  allPieces.forEach((piece, index) => { 
    if (props.whatShouldReturn === piece) {
      output = endGameComponents[index]
    }
  })

  return output
}

export default Animation
