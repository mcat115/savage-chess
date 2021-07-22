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

  Object.keys(frameImports).forEach((key) => {
    if (key.includes("BP")) {
      frames[0].push(frameImports[key])
    } else if (key.includes("WP")) {
      frames[1].push(frameImports[key])
    } else if (key.includes("BN")) {
      frames[2].push(frameImports[key])
    } else if (key.includes("WN")) {
      frames[3].push(frameImports[key])
    } else if (key.includes("BB")) {
      frames[4].push(frameImports[key])
    } else if (key.includes("WB")) {
      frames[5].push(frameImports[key])
    } else if (key.includes("BR")) {
      frames[6].push(frameImports[key])
    } else if (key.includes("WR")) {
      frames[7].push(frameImports[key])
    } else if (key.includes("BQ")) {
      frames[8].push(frameImports[key])
    } else if (key.includes("WQ")) {
      frames[9].push(frameImports[key])
    } else if (key.includes("BK")) {
      frames[10].push(frameImports[key])
    } else {
      frames[11].push(frameImports[key])
    }
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
  let i = 0

  allPieces.forEach((piece) => {
    if (props.whatShouldReturn === piece) {
      output = endGameComponents[i]
    }
    i++
  })

  return output
}

export default Animation
