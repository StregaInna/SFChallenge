// The purpose of this module is to bring the Sequelize instance (`db`) together with the model(s)

const db = require('./database')
const Coder = require('./coder')
const Company = require('./company')

// This this is where the association between coders and companies would go.
// I have left this out for now because we are using only seed data and not updating associations,
//  but in a future case where we want to have users and companies added and updated in the app
//  we would want to set up such a relationship here.
// This could also be used to move some of the functionality to the back end,
//   but I wanted to let the user adjust the differential for the fractal index.
// If this app were scalled up to include a truly large data set moving some of that functionality would eventually be a must,
//   because it would become untenible to load all of the data into state.
// Moving things to the backend would also have security benefits, 
//  but addressing data security concerns seemed too far beyond scope to deal with in the time allowed.
// It would like like this:
//
//Company.hasMany(Coder)
//Coder.belongsTo(Company)

module.exports = {
  db,
  Coder,
  Company,
}
