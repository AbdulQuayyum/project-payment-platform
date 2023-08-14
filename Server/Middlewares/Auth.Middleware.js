const jwt = require("jsonwebtoken")

// Decode the Token
module.exports = function (req, res, next) {
    try {
        const Token = req.headers.authorization.split(" ")[1]
        if (!Token) {
            return res.status(401).json({
                success: false,
                message: "No token provided"
            });
        }
        const Decoded = jwt.verify(Token, process.env.SECRET_KEY)
        req.body.UserID = Decoded.UserID
        next()
    } catch (error) {
        res.status(403).json({
            message: error.message,
            success: false
        });
    }
}