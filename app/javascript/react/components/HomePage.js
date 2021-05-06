import React from "react"
import { Link } from "react-router-dom"

const HomePage = (props) => {

  return (
    <div className="home-page">
      <p>Welcome to savage chess! The classic game, but with a simple twist. Inspired by the art and game elements of the viral game Among Us.</p>
      <p>No checks, no mate to win. You play the extra move to kill the king! This is no longer a gentlemen’s game, this is war!</p>
      <p>And like real warefare, there's nobody checking that both sides follow the rules! It's up to you to notice if your opponent does anything sneaky, like trying to move a piece in a way they aren't supposed to... call a war crime trial if you are suspicious!</p>
      <p>If you can confidently prove they cheated, they automatically lose! If you fail to, they get away with it and the game continues! Save the state of the board whenever you want to gather evidence.</p>
      <p>Or maybe you'll want to sneak in a slightly illegal move yourself when you're opponent isn't looking... social deduction mixed with raw strategy!</p>
      <Link to="/play">Start a game!</Link>
    </div>
  )
}

export default HomePage