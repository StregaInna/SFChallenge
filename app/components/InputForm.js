import React, {Component} from 'react'
import {validateCoderId, validateDifferential} from '../calculators/inputCheckers'
import { getStats } from '../redux/coderStats'

class InputForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            coderId: '',
            differential: '0.15',
            validID: true,
            validDifferential: true

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.setState({
            validID: validateCoderId(this.props.coders, parseInt(this.state.coderId)),
            validDifferential: validateDifferential(parseFloat(this.state.differential)) 
        })
        if (this.state.validID && this.state.validDifferential){
            this.props.getStats(this.props.coders, this.props.companies, parseInt(this.state.coderId), parseFloat(this.state.differential))
        }
    }
    render() {
        const { coderId, differential } = this.state
        return (
            <div className="add-div" >
                <h3>Entry the Coder's Candidate Id #</h3>
                <form className="add-form" onSubmit={this.handleSubmit}>
                    <lable htmlFor="coderId">Id #:</lable>
                    <input name="coderID" onChange={this.handleChange} value={coderId} />
                    <lable htmlFor="differential">Set Differential (a number between 0 and 1):</lable>
                    <input name="differential" onChange={this.handleChange} value={differential} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}
const mapState = (state) => {
    return {
       companies: state.companies,
       coders: state.coders 
    }
}
const mapDispatch = (dispatch) => {
    return ({
      getStats: (coderArray, companyArray, coderId, differential) => dispatch(getStats(coderArray, companyArray, coderId, differential))  
    })
}
