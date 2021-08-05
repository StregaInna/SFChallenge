//these functions are here to check if an input value is valid

export function validateCoderId(coderArray, coderID){
    for (let i = 0; i < coderArray.length; i++){
        console.log('coder id is ', coderArray[i].candidate_id)
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