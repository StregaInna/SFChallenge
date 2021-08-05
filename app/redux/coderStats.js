import codersBySimilarCompany from "../calculators/similarCompany"
import precentileByComScore from "../calculators/precentileByCommunicationScore"
import precentileByCodingScore from "../calculators/precentileByCodeScore"
import precentileByAggScore from "../calculators/precentileByAggregate"
//ACTION TYPES

const SET_STATS = 'SET_STATS'


//ACTION CREATORS
//this action creator takes the coder and the stats we calculated for them and loads them into state
export const setStats = (stats) => {
  return {
    type: SET_STATS,
    stats
  }
}

//THUNK CREATORS
//this thunk creator creates a thunk that calls the functions from the calculator folder to get the stats for a given coder by id
export const getStats = (coderArray, companyArray, coderId, differential) => {
  return function (dispatch){
    const codersToCompare = codersBySimilarCompany(coderArray, companyArray, coderId, differential)
    const comPrecentile = precentileByComScore(codersToCompare)
    const coderPrecentile = precentileByCodingScore(codersToCompare)
    const aggPrecentile = precentileByAggScore(codersToCompare)
    dispatch(setStats({coderId, comPrecentile, coderPrecentile, aggPrecentile}))
  }
}

// STATS SUB_REDUCER

export default function statsReducer(stats = {}, action) {
  switch (action.type) {
    case SET_STATS:
      return action.stats
    default:
      return stats
  }
}
