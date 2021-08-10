// This is a depricated file left here to show a previous solution.
// For the newer solution see percetile.js

// This explanation is also intended for the percentileByCommunicationScore and 
//  the precentileByAggregateScore files. They use the same aproach.
// NB: This file is best read bottom to top.
// precentileByCodingScore takes an array of coder objects and a candidate_id 
//   and returns that candidate's precentile standing in the array of coders
// First it gets a sorted copy of the array by calling sortByCodingScore, 
//   which runs a recursive, merge-sort algorithm (using mergeByCodeScore and split as helper functions)
// Next we find the coder's index in the sorted list by calling indexOfByCandidateId
// Finally we devide the index of that coder by the length of the array, 
//  muliply by 100 to get a precentile, and return the answer.

function split (array) {
  const center = Math.floor(array.length / 2),
        left = array.slice(0, center),
        right = array.slice(center)
  return [left, right]
}
function mergeByCodeScore(left, right) {
    const merged = []
    let leftIdx = 0
    let rightIdx = 0
    while (leftIdx < left.length || rightIdx < right.length) {

      if (leftIdx === left.length) {
        merged.push(right[rightIdx])
        rightIdx++
      } else if (rightIdx === right.length) {
        merged.push(left[leftIdx])
        leftIdx++
      } else if (left[leftIdx].coding_score < right[rightIdx].coding_score) {
        merged.push(left[leftIdx])
        leftIdx++
      } else {
        merged.push(right[rightIdx])
        rightIdx++
      }
    }
    return merged;
  }
  function sortByCodingScore(codersArray){
    if (codersArray.length <2) return codersArray
    const [left, right] = split(codersArray)
    const mergedLeft = sortByCodingScore(left)
    const mergedRight = sortByCodingScore(right)
    return mergeByCodeScore(mergedLeft, mergedRight)
}
function indexOfByCandidateId(codersArray, id){
  for(let i = 0; i < codersArray.length; i++){
    if (codersArray[i].candidate_id===id) return i
  }
  return 0
}
function precentileByCodingScore(codersArray, id){
  const sortedArray = sortByCodingScore(codersArray)
  const coderRank = indexOfByCandidateId(sortedArray, id)
  console.log("rank ", coderRank)
  return ((coderRank/codersArray.length)*100)
}
export default precentileByCodingScore
