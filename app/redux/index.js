import { combineReducers } from 'redux'
import codersReducer from './coders'
//Combine reducers is another feature that is currently only here for future scalability.
//If the app were eventually scaled up to include additional data (such as a companies table in the database)
//  we would add the reducers for that data into this appReducer
const appReducer = combineReducers({
    coders: codersReducer
})

export default appReducer