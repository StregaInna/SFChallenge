
import React from "react"
import { connect } from "react-redux"

class StatsDisplay extends React.Component {
    render(){
        return (
            <div>
                {(this.props.stats.coderId)?(
                    <div>
                        <h3>Candidate #: {this.props.stats.coderId}</h3>
                        <h3>Coding Precentile: {this.props.stats.coderPrecentile}</h3>
                        <h3>Communication Precentile: {this.props.stats.comPrecentile}</h3>
                    </div>
                ):(<div></div>)}
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        stats : state.stats
    }
}

export default connect(mapState)(StatsDisplay)