const express = require('express')
const router = express.Router()
const userController = require('../Controllers/User.controller')


router.get('/users', userController.getUsers)
router.post('/users', userController.postUsers)

module.exports = router