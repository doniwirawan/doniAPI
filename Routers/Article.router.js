const express = require('express')
const router = express.Router()
const auth = require('../Middleware/Auth.middleware');

const articleController = require('../Controllers/Article.controller')

router.get('/articles', articleController.getArticles)
router.post('/articles', auth, articleController.postArticles)

module.exports = router