import React from "react"
import { connect } from "react-redux"
import { fetchCoders} from "../redux/coders"

class AllCoders extends React.Component {
  componentDidMount(){
    console.log('componentDidMount')
    this.props.fetchCoders()
  }
  render() {
      console.dir(this.props.coders)
    return (
      <div>
        {(this.props.coders.length) ? (
        <ul className="listAll">
          {this.props.coders.map((coder) => {
              return(
            <li key={coder.id} className="listItem">
                <h2>id: {coder.candidate_id}, communcation score:{coder.communication_score}, coding score: {coder.coding_score}, title: {coder.title} </h2>
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
    coders: state.coders
  }
}

const mapDispatch = (dispatch) => {
  return ({
    fetchCoders: () => dispatch(fetchCoders())
  })
}

export default connect(mapState, mapDispatch)(AllCoders);