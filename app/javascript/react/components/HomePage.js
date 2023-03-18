import React from "react"
import { Link } from "react-router-dom"

const HomePage = (props) => {
  return (
    <div className="home-page">
      <h1>Welcome to Savage Chess!</h1>
      <h2>
        The classic game, but with a simple twist! Inspired by the hit viral
        game Among Us.
      </h2>
      <div id="playLink">
        <Link to="/play">Click here to play!</Link>
      </div>
      <p>
        A casual version of chess you can play with friends regardless of chess
        experience. No checks, no mate to win. You play the extra move to kill
        the king! This is no longer a gentlemen’s game, this is war!
      </p>
      <p>
        And like real warefare, there's nobody checking that both sides follow
        the rules! It's up to you to notice if your opponent does anything
        sneaky, like trying to move a piece in a way they aren't supposed to...
        pause the game and call them out if you are suspicious! I made this app
        to have a digitial chess experiece akin to having a real board in front
        of you. Almost all online chess apps have code inhibiting how you can
        move pieces, which can be frustuing and inhibiting at times. Make up
        your own rules if you want!
      </p>
      <p>
        It also serves as a fully functional board and pieces virtual toy. Keep
        track of endless custom positions, and save them to try out different
        paths. Much like the freedom a real chess board gives, but with the
        ability to easily swap and store positions, and the use of unlimited
        pieces!
      </p>
      <div id="aboutLink">
        <Link to="/about">About the developer</Link>
      </div>
    </div>
  )
}

export default HomePage
