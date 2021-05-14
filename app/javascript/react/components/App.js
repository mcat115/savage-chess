import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomePage from "./HomePage"
import PlayPage from "./PlayPage"
import AboutPage from "./AboutPage"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/play" component={PlayPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
