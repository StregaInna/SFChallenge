// The purpose of this module is to bring the Sequelize instance (`db`) together with the model(s)
// In this case there is only one model, but I set this up anyway for the purpose of scalability
// For example, in the future we might add another table for all of the companies include information about them other then which coders work there 

const db = require('./database')
const Coder = require('./coder')

// If this app were to scale up and include a database table for companies, 
//this this is where the association between coders and companies would go.
// It would like like this:
//
//Company.hasMany(Coder)
//Coder.belongsTo(Company)

module.exports = {
  db,
  Coder,
}
