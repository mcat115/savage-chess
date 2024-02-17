import React from "react"
import { Link } from "react-router-dom"

const HomePage = (props) => {
  return (
    <div id="home-page">
      <h1>Savage Chess</h1>
      <h2>
        The classic game, but with a simple twist! Inspired by the hit viral
        game Among Us.
      </h2>
      <div className="playLinkContainer">
        <div className="playLink">
          <Link to="/play">Start Game</Link>
        </div>
      </div>
      <div className="textContainer">
        <p className="child">
          A casual version of chess you can play with friends regardless of level of
          experience. No checks, no mate to win. You play the extra move to kill
          the king. This is no longer a gentlemen’s game, this is war!
        </p>
        <p className="child">
          Like real warfare, there's nobody checking that both sides follow
          the rules. It's up to you to notice if your opponent does anything
          sneaky, like trying to move a piece in a way they aren't supposed to...
          pause the game and call them out if you are suspicious! Make up
          your own rules if you want!
        </p>
        <p className="child">
          This app serves as a fully functional board and pieces virtual toy. Keep
          track of endless custom positions, and save them to try out different
          paths. Much like the freedom a real chess board gives, but with the
          ability to easily swap and store positions, and the use of unlimited
          pieces!
        </p>
      </div>
      <div className="aboutLink">
        <Link to="/about">About the developer</Link>
      </div>
    </div>
  )
}

export default HomePage
