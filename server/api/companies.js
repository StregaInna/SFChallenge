const router = require('express').Router()
const {Company} = require('../db/index')

router.get('/', async (req, res, next) => {
    try {
        res.send(await Company.findAll())
    } catch (error){
        next(error)
    }
})
//this is where we would add additional api routes for adding, deleting, or updating the record on Company in the database
module.exports = router
