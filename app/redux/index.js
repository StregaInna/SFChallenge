import { combineReducers } from 'redux'
import codersReducer from './coders'
import companiesReducer from './companies'
import statsReducer from './coderStats'

const appReducer = combineReducers({
    companies: companiesReducer,
    coders: codersReducer,
    stats: statsReducer
})

export default appReducer
