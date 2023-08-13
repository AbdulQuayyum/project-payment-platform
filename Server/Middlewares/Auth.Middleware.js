const jwt = require("jsonwebtoken")

// Decode the Token
module.exports = function (req, res, next) {
    try {
        const Token = req.headers.Authorization.split(" ")[1]
        const Decoded = jwt.verify(Token, process.env.SECRET_KEY)
        req.body.UserID = Decoded.UserID
        next()
    } catch (error) {
        res.send({
            message: error.message,
            success: false
        })
    }
}