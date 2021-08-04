"use strict"

const router = require("express").Router()
router.use('/coders', require('./coders'))
//if we were to build out the database to include a companies table, this is where we would add the /companies route to serve them up

router.use((req, res, next) => {
  const err = new Error("API route not found!")
  err.status = 404
  next(err)
})

module.exports = router
