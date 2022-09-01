const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
require('dotenv').config

const userSchema = mongoose.Schema({
    username: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
    email: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    bio: String,
    // password: String,
    image: String,
    hash: String,
    salt: String
}, { timestamps: true })

userSchema.plugin(uniqueValidator, { message: 'is already taken.' })

// userSchema.methods.setPassword = (password) => {
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
// }

// userSchema.methods.validPassword = (password) => {
//     const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
//     return this.hash === hash
// }

// userSchema.methods.generateJWT = () => {
//     const today = new Date()
//     const exp = new Date(today)
//     exp.setDate(today.getDate() + 60)

//     return jwt.sign({
//         id: this._id,
//         username: this.username,
//         exp: parseInt(exp.getTime() / 1000),
//     }, process.env.SECRET)
// }

// userSchema.methods.toAuthJSON = () => {
//     return {
//         username: this.username,
//         email: this.email,
//         token: this.generateJWT(),
//         bio: this.bio,
//         image: this.image
//     }
// }

module.exports = mongoose.model('User', userSchema)