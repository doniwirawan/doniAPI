const express = require('express')
const router = express.Router()
const auth = require('../Middleware/Auth.middleware');

const articleController = require('../Controllers/Article.controller')

router.get('/articles', articleController.getArticles)
router.post('/articles', auth, articleController.postArticles)
router.put('/articles/:articleTitle', auth, articleController.updateArticle)
router.patch('/articles/:articleTitle', auth, articleController.editArticle)
router.delete('/articles/:articleTitle', auth, articleController.deleteArticle)

module.exports = router