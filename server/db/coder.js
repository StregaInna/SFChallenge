const Sequelize = require('sequelize')
const db = require('./database')

const Coder = db.define('coder', {
    candidate_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    communication_score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    coding_score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    title: {
        type: Sequelize.ENUM('Engineer', 'Senior Engineer'),
        allowNull: false
    },
    company_id: {
        type: Sequelize.INTEGER
    }

})

//I am allowing comany_id to be null because I imagine a case where an eningeer might be between companies, even though this does not exist in our seed data

module.exports = Coder
