const Sequelize = require('sequelize')
const db = require('./database')

const Company = db.define('company', {
    company_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fractal_index: {
        type: Sequelize.FLOAT,
        allowNull: false
    }

})

module.exports = Company