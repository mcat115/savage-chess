import React from "react"
import { Link } from "react-router-dom"

const HomePage = (props) => {

  return (
    <div className="home-page">
      <p>Welcome to savage chess! The classic game, but with a simple twist:</p>
      <p>No checks, no mate to win. You play the extra move to kill the king! This is no longer a gentlemen’s game, this is war!</p>
      <p>And like real warefare, there's nobody checking that both sides follow the rules! It's up to you to notice if your opponent does anything sneaky, like trying to move a piece in a way they aren't supposed to...</p>
      <Link to="/play">Start a game!</Link>
    </div>
  )
}

export default HomePage