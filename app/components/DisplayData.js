//this component exists as a test to make sure that all of my data is making it from the back end to the front end 

import React from "react"
import { connect } from "react-redux"
import { fetchCoders} from "../redux/coders"
import { fetchCompanies } from "../redux/companies"

class DisplayData extends React.Component {
  componentDidMount(){
    console.log('componentDidMount')
    this.props.fetchCoders()
    this.props.fetchCompanies()
  }
  render() {
      console.dir(this.props.coders)
    return (
      <div>
        <h2>Here's our coders list:</h2>  
        {(this.props.coders.length) ? (
        <ul className="listAll">
          {this.props.coders.map((coder) => {
              return(
            <li key={coder.id} className="listItem">
                <h3>id: {coder.candidate_id}, communication score:{coder.communication_score}, coding score: {coder.coding_score}, title: {coder.title} </h3>
            </li>)})
          }
        </ul>) : (
          <h1>loading...</h1>
        )}
               <h2>Here's our companies list:</h2>  
        {(this.props.companies.length) ? (
        <ul className="listAll">
          {this.props.companies.map((company) => {
              return(
            <li key={company.id} className="listItem">
                <h3>id: {company.company_id}, fractal_index: {company.fractal_index} </h3>
            </li>)})
          }
        </ul>) : (
          <h1>loading...</h1>
        )}
      </div>)
  }
}

const mapState = (state) => {
  return {
    coders: state.coders,
    companies: state.companies
  }
}

const mapDispatch = (dispatch) => {
  return ({
    fetchCoders: () => dispatch(fetchCoders()),
    fetchCompanies: () => dispatch(fetchCompanies())

  })
}

export default connect(mapState, mapDispatch)(DisplayData);
