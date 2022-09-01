const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: String,
    author: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true })

module.exports = mongoose.model('Article', articleSchema)