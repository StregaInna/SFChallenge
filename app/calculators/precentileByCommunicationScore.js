// See commentary of percentileByCodeScore for and explanation of this file
function split (array) {
  const center = Math.floor(array.length / 2),
        left = array.slice(0, center),
        right = array.slice(center);
  return [left, right];
}

function mergeByComScore(left, right) {
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
      } else if (left[leftIdx].communication_score < right[rightIdx].communication_score) {
        merged.push(left[leftIdx])
        leftIdx++
      } else {
        merged.push(right[rightIdx])
        rightIdx++
      }
    }
    return merged
  }
  function sortByComScore(codersArray){
    if (codersArray.length <2) return codersArray
    const [left, right] = split(codersArray)
    const mergedLeft = sortByComScore(left)
    const mergedRight = sortByComScore(right)
    return mergeByComScore(mergedLeft, mergedRight)
}
function indexOfByCandidateId(codersArray, id){
  for(let i = 0; i < codersArray.length; i++){
    if (codersArray[i]===id) return i
  }
  return 0
}
function precentileByComScore(codersArray, id){
  const sortedArray = sortByComScore(codersArray)
  const coderRank = indexOfByCandidateId(sortedArray, id)
  return ((coderRank/codersArray.length)*100)
}
export default precentileByComScore
