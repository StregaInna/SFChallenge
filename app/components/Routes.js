import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import AllCoders from "./AllCoders"

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <h3>Welcome!</h3>
          <div className="navLinks">
          </div>
        </nav>
        <main>
          <h1>Welcome to Inna's solution to Simple Fractal's coding challenge!</h1>
        </main>
        <Switch>
          <Route exact path="/coders" component={AllCoders} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes;
