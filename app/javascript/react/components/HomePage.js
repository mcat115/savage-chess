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
        A casual version of chess you can play with friends while having a few
        laughs, regardless of chess experience. No checks, no mate to win. You
        play the extra move to kill the king! This is no longer a gentlemen’s
        game, this is war!
      </p>
      <p>
        And like real warfare, there's nobody checking that both sides follow
        the rules! It's up to you to notice if your opponent does anything
        sneaky, like trying to move a piece in a way they aren't supposed to...
        pause the game and call them out if you are suspicious! The only
        movement rule is you cannot capture their king with your own. If you can
        confidently prove your opponent cheated, they automatically lose! If you
        fail to, they get away with it and the game continues! If you are signed
        in, save the state of the board whenever you want to gather evidence. Or
        maybe you'll want to sneak in a slightly illegal move yourself when your
        opponent isn't looking... social deduction mixed with raw strategy!
      </p>
      <p>
        It also serves as a fully functional board and pieces virtual toy! Make
        custom positions and save them to explore different paths. Much like the
        freedom a real chess board gives, but with the ability to easily keep
        positions, and use of unlimited pieces!
      </p>
      <div id="aboutLink">
        <Link to="/about">About the developer</Link>
      </div>
    </div>
  )
}

export default HomePage
