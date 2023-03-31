import React from "react"
import { Keyframes, Frame } from "react-keyframes"
import keyframes from "react-keyframes/dist/keyframes"
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

  let frames = {
    bp: [],
    wp: [],
    bn: [],
    wn: [],
    bb: [],
    wb: [],
    br: [],
    wr: [],
    bq: [],
    wq: [],
    bk: [],
    wk: [],
  }

  Object.keys(frameImports).forEach((key) => {
    Object.keys(frames).forEach((piece) => {
      if (key.includes(piece)) {
        frames[piece].push(frameImports[key])
      }
    })
  })

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
  frames[props.whatShouldReturn].forEach((frame) => {
    frameData.push(
      <Frame duration={100}>
        <img src={frame} />
      </Frame>
    )
  })

  const newGame = () => {
    props.setWhatShouldReturn("board")
    props.setBoardState(props.defaultBoard)
  }

  return (
    <div>
      <Keyframes>{frameData}</Keyframes>
      <p id="newGameButton" className="center" onClick={newGame}>
        Start a new game!
      </p>
    </div>
  )
}

export default Animation
