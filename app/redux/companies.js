// if this project were scalled up, it'd add actions and thunks for adding, removing, and updating the records

import axios from 'axios'

//ACTION TYPES

const SET_COMPANIES = 'SET_COMPANIES'


//ACTION CREATORS
//this action creator takes the data retreived bellow and sends it to the reducer to load into state
export const setCompanies = (companies) => {
  return {
    type: SET_COMPANIES,
    companies
  }
}

//THUNK CREATORS
//this thunk creator is how we call the server and retreive our data set. 
//It then sends that data to the action creator above
export const fetchCompanies = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/companies')
      dispatch(setCompanies(data))
    }
    catch (error){
      console.error(error)
    }
  }
}

// CODER SUB_REDUCER
// If SET_COMPANIES is called, the reducer updates state to reflect the new data
// Otherwise it returns the existing data in state
// The default value for companies starts as an empty array, which will help to prevent some errors in the react componets 
export default function companiesReducer(companies = [], action) {
  switch (action.type) {
    case SET_COMPANIES:
      return action.companies
    default:
      return companies
  }
}
