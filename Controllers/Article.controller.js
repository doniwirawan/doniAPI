const Article = require('../Models/Article.model')

const getArticles = async (req, res) => {
    const articles = await Article.find({})
    if (articles) {
        res.status(200).json({
            message: "Found",
            articles,
        })
    }
    else {
        res.status(400).json({
            message: "Bad request"
        })
    }
}

const postArticles = async (req, res) => {
    console.log(req.body)
    const article = await new Article({
        title: req.body.title,
        content: req.body.content
    })

    console.log(article)

    await article.save((err) => {
        if (err) {
            console.log(err)
            return
        }

        res.json({ article: article })
    })
}
module.exports = {
    getArticles,
    postArticles
}