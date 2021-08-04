// if this project were scalled up, it'd add actions and thunks for adding, removing, and updating the records

import axios from 'axios'

//ACTION TYPES

const SET_CODERS = 'SET_CODERS'


//ACTION CREATORS
//this action creator takes the data retreived bellow and sends it to the reducer to load into state
export const setCoders = (coders) => {
  return {
    type: SET_CODERS,
    coders
  }
}

//THUNK CREATORS
//this thunk creator is how we call the server and retreive our data set. 
//It then sends that data to the action creator above
export const fetchCoders = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/coders')
      dispatch(setCoders(data))
    }
    catch (error){
      console.error(error)
    }
  }
}

// CODER SUB_REDUCER
// If set coders is called, the reducer updates state to reflect the new data
// Otherwise it returns the existing data in state
// The default value for coders starts as an empty array, which will help to prevent some errors in the react componets 
export default function codersReducer(coders = [], action) {
  switch (action.type) {
    case SET_CODERS:
      return action.coders
    default:
      return coders
  }
}
