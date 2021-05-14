import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomePage from "./HomePage"
import PlayPage from "./PlayPage"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/play" component={PlayPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
