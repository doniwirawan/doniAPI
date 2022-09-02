const User = require('../Models/User.model')
const jwt = require('jsonwebtoken');

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


const register = async (req, res) => {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem registering the user.")
            // create a token
            var token = jwt.sign({ id: user._id }, process.env.SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        });
}

const login = async (req, res) => {

}


const updateUser = async (req, res) => {

}


const editUser = async (req, res) => {

}

const deleteUser = async (req, res) => {

}

module.exports = {
    getUsers,
    register,
    login,
    updateUser,
    editUser,
    deleteUser
}