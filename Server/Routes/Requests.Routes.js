const router = require("express").Router()

const AuthMiddleware = require("../Middlewares/Auth.Middleware")
const Requests = require("../Models/Requests.Model")
const User = require("../Models/User.Model")

// Get all requests for a user
router.post("/GetAllRequestsByUser", AuthMiddleware, async (req, res) => {
    try {
        const NewRequests = await Requests.find({
            $or: [{ Sender: req.User._id }, { Receiver: req.User._id }]
        })
            .populate("Sender")
            .populate("Receiver")

        res.send({
            data: NewRequests,
            message: "Request fetched successfully",
            success: true
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// Send request to another user 
router.post("/SendRequest", AuthMiddleware, async (req, res) => {
    try {
        const { Receiver, Amount, Reference } = req.body
        const NewRequest = new Request({ Sender: req.User._id, Receiver: Receiver, Amount: Amount, Reference: Reference })

        await NewRequest.save()

        res.send({
            data: NewRequest,
            message: "Request sent successfully",
            success: true
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router