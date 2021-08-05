// The purpose of this module is to bring the Sequelize instance (`db`) together with the model(s)
// In this case there is only one model, but I set this up anyway for the purpose of scalability
// For example, in the future we might add another table for all of the companies include information about them other then which coders work there 

const db = require('./database')
const Coder = require('./coder')
const Company = require('./company')

// This this is where the association between coders and companies would go.
// I have left this out for now because we are using only seed data,
//  but in a future case where we want to have users and companies added and updated in the app
//  we would want to set up such a relationship here.
// It would like like this:
//
//Company.hasMany(Coder)
//Coder.belongsTo(Company)

module.exports = {
  db,
  Coder,
  Company,
}
