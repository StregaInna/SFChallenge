const { green, red } = require("chalk")
var csv = require('jquery-csv');
//this allows us to make our success or error messages stand out more in the terminal

const { db, Coder, Company } = require("./server/db")
//this grabes our database to seed it


const coders = $.csv.toObjects("./seed-data/score-records.csv")
const companies = $.csv.toObjects("./seed-data/companies.csv")
//this grabs the data from the .csv files

//This is from an old solution in which the data was manually transfered to an array of objects (see /seed_data/depricated)
// const  coders  = require("./seed_data/coderData")
// const companies = require("./seed_data/companyData")

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(coders.map(coder => {
      return Coder.create(coder)
    }))
    await Promise.all(companies.map(company => {
      return Company.create(company)
    }))
  } catch (err) {
    console.log(red(err))
  }
}

module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"))
      db.close()
    })
    .catch(err => {
      console.error(red("Sorry, Something went wrong!"))
      console.error(err)
      db.close()
    })
}
