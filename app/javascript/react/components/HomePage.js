import React from "react"
import { Link } from "react-router-dom"

const HomePage = (props) => {

  return (
    <div className="home-page">
      <h1>Welcome to Savage Chess!</h1>
      <h2>The classic game, but with a simple twist! Inspired by the art and game elements of the hit viral game Among Us.</h2>
      <p>A casual version of chess you can play with friends while having a few laughs and a few drinks, regardless of chess experience. No checks, no mate to win. You play the extra move to kill the king! This is no longer a gentlemen’s game, this is war!</p>
      <p>And like real warfare, there's nobody checking that both sides follow the rules! It's up to you to notice if your opponent does anything sneaky, like trying to move a piece in a way they aren't supposed to... call a war crime trial if you are suspicious! The only movement rule is you cannot capture their king with your own. If you can confidently prove your opponent cheated, they automatically lose! If you fail to, they get away with it and the game continues! If you are signed in, save the state of the board whenever you want to gather evidence. Or maybe you'll want to sneak in a slightly illegal move yourself when your opponent isn't looking... social deduction mixed with raw strategy!</p>
      <p>It also serves as a fully functional board and pieces virtual toy! Make custom positions and save positions to try out different paths. Much like the freedom a real chess board gives, but with the ability to easily keep positions and use of unlimited pieces!</p>
      <div id="playLink"><Link to="/play">Click here to play!</Link></div>
      <p>DISCLAIMER: This app is deployed to heroku, which is a free server. The trade off is it's super slow and laggy, and thus notoriously bad for animations (unaware to me until I did research after the fact). After a game ends, there is an animation displaying who won. But due to random factors like internet speed and traffic, it will often lag to the last frame. Sometimes some animations don't lag, but others do (there is a different animation depending on the final piece moved and which color won). This is an issue that only happens on the free version of heroku, so I didn't want to remove them because they work perfectly in all other contexts, took a lot of time and effort, and will still work here if the heroku servers don’t seem to be under too much stress.</p>
      <div id="aboutLink"><Link to="/about">About the developer</Link></div>
    </div>
  )
}

export default HomePage