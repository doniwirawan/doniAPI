const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const Article = require('./Models/Article.model')
const Connection = require('./Config/Connection.db')
const articleRouter = require('./Routers/Article.router')
const userRouter = require('./Routers/User.router')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(articleRouter)
app.use(userRouter)

app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        console.log(err)
    }

    console.log('server running on port 3000')

})