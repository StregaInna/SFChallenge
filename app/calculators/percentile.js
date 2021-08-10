//The precentile function takes the array of coder objects to be compared, the id of coder object we are coparing them to, 
//  and the type of score we are comparing.
//First it senda the array and id to a helper function to pull out the coderobject with that id.
//Next it counts how many objects in the array have a lower or equal value for the scoretype property. 
//It then devides that number by the length of the array, multiplies by 100 to get the precentile, and returns the value  
function getCoderObjById(coderArray, coderId){
    for (let i = 0; i < coderArray.length; i++)
    {
        if (coderArray[i].candidate_id===coderId){
            return (coderArray[i])
        }
    }
}

export default function precentile (coderArray, coderId, scoreType){
    const coderObj = getCoderObjById(coderArray, coderId) 
    let n = 0
    for (let i = 0; i < coderArray.length; i++){
        if (coderArray[i][scoreType] <= coderObj[scoreType]){
            n++
        }
    }
    return ((n/coderArray.length)*100)
}