const express = require('express')
const router = express.Router()
const auth = require('../Middleware/Auth.middleware');
const userController = require('../Controllers/User.controller')


router.get('/users', userController.getUsers)
router.post('/register', userController.register)
router.put('/users/:userID', auth, userController.updateUser)
router.patch('/users/:userID', auth, userController.editUser)

module.exports = router