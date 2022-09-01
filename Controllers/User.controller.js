const User = require('../Models/User.model')

const getUsers = async (req, res) => {
    const users = await User.find({})
    if (users) {
        res.status(200).json({
            message: "Found",
            users,
        })
    }
    else {
        res.status(400).json({
            message: "Bad request"
        })
    }
}

const postUsers = async (req, res) => {
    console.log(req.body)
    const user = await new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })


    await user.save((err) => {
        if (err) {
            console.log(err)
            return
        }

        res.json({ user: user })
    })
}

module.exports = {
    getUsers,
    postUsers
}