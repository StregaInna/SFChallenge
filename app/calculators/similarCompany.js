//NB: this file is best read bottom to top

// The goal here is to return an array that only includes the coders in similar companies to 
//   the specified coder. I've broken this down into 4 functions to make it more readable.

// codersBySimilarCompany calls a helper function to get the company id for the specified coder
//   it then uses that id to call similarCompany
// similarCompany takes the array of company objects and returns an array of company IDs
//   for the companies whose fractal_index is within the specified differential of the 
//   fractal_index of a specified company.
//   It also uses a helper function to find the fractal index by the company id
//
// I chose to have the differential as an argument instead of hard coding in a value
//   so that we can eventually let the users set it themselves on the front end.

function getFractalIndexById(companyArray, companyId){
    for(let i = 0; i < companyArray.length; i++){
        if (companyArray[i].company_id === companyId){
            return (companyArray[i].fractal_index)
        }
    }
    return 0
}

function similarCompany(companyArray, companyId, differential){
    const fractIndex = getFractalIndexById(companyArray, companyId)
    const filteredArray = companyArray.filter((company)=>{
        const difference = (fractIndex - company.fractal_index)
        if (difference < 0){difference *= (-1)}
        return (difference <= differential)
    })
    return (filteredArray.map((company)=>{return company.company_id}))
}

function findCompanyIdByCoderId(coderArray, coderId){
    for (let i = 0; i < coderArray.length; i++){
        if (coderArray[i].candidate_id === coderId){
            return (coderArray[i].company_id)
        }
    }
    return 0
}

function codersBySimilarCompany(coderArray, companyArray, coderId, differntial){
    const companyID = findCompanyIdByCoderId(coderArray, coderId)
    const similarCompanyArray = similarCompany(companyArray, companyID, differntial)
    const codersInSimilarCompanies = coderArray.filter((coder)=>{return (similarCompanyArray.includes(coder.company_id))})
    return codersInSimilarCompanies
}

export default codersBySimilarCompany
