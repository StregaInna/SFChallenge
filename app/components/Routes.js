import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

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
        </Switch>
      </div>
    </Router>
  )
}

export default Routes;
