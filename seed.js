const { green, red } = require("chalk")
//this allows us to make our success or error messages stand out more in the terminal

const { db, Coder } = require("./server/db")
//this grabes our database to seed it

const {coders} = require("./data")
//this grabs the data we are going to seed the database with

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(coders.map(coder => {
      return Coder.create(coder)
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
