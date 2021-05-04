import React from "react"
import { Link } from "react-router-dom"

const HomePage = (props) => {

  return (
    <div className="home-page">
      <p>Welcome to savage chess! The classic game, but with one simple twist:</p>
      <p>No checks, no mate to win. You play the extra move to kill the king! This is no longer a gentlemen’s game, this is war!</p>
      <Link to="/play">Start a game!</Link>
    </div>
  )
}

export default HomePage