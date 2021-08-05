import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import DisplayData from "./DisplayData"
import InputForm from "./InputForm"

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <div className="navLinks">
          </div>
        </nav>
        <main>
          <h1>Welcome to Inna's solution to Simple Fractal's coding challenge!</h1>
          <InputForm />
        </main>
        <Switch>
          <Route exact path="/data" component={DisplayData} />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes;
