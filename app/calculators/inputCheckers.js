//These functions are here to check if an input value is valid
//  the coder needs to actually exist in the array of coders
//  and the differential needs to be a number between 0 and 1
// I believe that the react hooks library is meant to handle things like this
//   but I haven't learned it yet

export function validateCoderId(coderArray, coderID){
    for (let i = 0; i < coderArray.length; i++){
        if (coderArray[i].candidate_id === coderID){
            return true
        }
    }
    return false
} 

export function validateDifferential(differential){
    if (typeof differential !== "number"){
        return false
    } 
    if (differential <= 0){
        return false
    }
    if (differential >= 1){
        return false
    }
    return true
}