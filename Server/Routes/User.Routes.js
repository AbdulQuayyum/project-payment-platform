const router = require("express").Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../Models/User.Model")
const AuthMiddleware = require("../Middlewares/Auth.Middleware")

// Create a new User Account
router.post("/Register", async (req, res) => {
    try {
        // Check if the user already exists
        let CheckUser = await User.findOne({ Email: req.body.Email })
        if (CheckUser) {
            return res.send({
                success: false,
                message: "User already exists"
            })
        }

        // Encrypt Password
        const Salt = await bcrypt.genSalt(10)
        const HashedPassword = await bcrypt.hash(req.body.Password, Salt)
        req.body.Password = HashedPassword
        const NewUser = new User(req.body)
        await NewUser.save()
        res.send({
            message: "User Created Successfully",
            data: null,
            success: true
        })
    } catch (error) {
        res.send({
            message: error.message,
            success: false
        })
    }
})

// Login into User Account
router.post("/Login", async (req, res) => {
    try {
        // Check if the user already exists
        let CheckUser = await User.findOne({ Email: req.body.Email })
        if (!CheckUser) {
            return res.send({
                success: false,
                message: "User does not exist"
            })
        }

        // Check if Password is valid
        const ValidatePassword = await bcrypt.compare(req.body.Password, CheckUser.Password) // Use CheckUser.Password
        if (!ValidatePassword) {
            return res.send({
                success: false,
                message: "Invalid Password"
            })
        }

        // Generate token
        const Token = jwt.sign({ UserID: CheckUser._id }, process.env.SECRET_KEY, { expiresIn: 60 * 10 })
        res.send({
            message: "User has been signed in successfully",
            data: Token, // Use Token here
            success: true
        })
    } catch (error) {
        res.send({
            message: error.message,
            success: false
        })
    }
})

// Get User's Information
router.post("/GetUserInformation", AuthMiddleware, async (req, res) => {
    try {
        const NewUser = await User.findById(req.body.UserID)
        NewUser.Password = "****"
        if (!NewUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        return res.status(200).json({
            message: "User Information fetched successfully",
            data: NewUser,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            success: false
        });
    }
})

module.exports = router