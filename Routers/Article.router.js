const express = require('express')
const router = express.Router()
const articleController = require('../Controllers/Article.controller')

router.get('/articles', articleController.getArticles)
router.post('/articles', articleController.postArticles)

module.exports = router