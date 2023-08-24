const router = require("express").Router()

const AuthMiddleware = require("../Middlewares/Auth.Middleware")
const Request = require("../Models/Requests.Model")
const User = require("../Models/User.Model")
const Transaction = require("../Models/Transaction.Model")

// Get all requests for a user
router.post("/GetAllRequestsByUser", AuthMiddleware, async (req, res) => {
    try {
        const NewRequests = await Request.find({
            $or: [{ Sender: req.body.UserID }, { Receiver: req.body.UserID }]
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
        const NewRequest = new Request({ Sender: req.body.UserID, Receiver, Amount, Reference })

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

// Update a request status
router.post("/UpdateRequestStatus", AuthMiddleware, async (req, res) => {
    try {
        if (req.body.Status === "Accept") {

            // Create a transaction
            const NewTransaction = new Transaction({
                Sender: req.body.Receiver._id,
                Receiver: req.body.Sender._id,
                Amount: req.body.Amount,
                Reference: req.body.Reference,
                status: "Accept"
            })
            await NewTransaction.save()

            // Deduct the amount from the sender
            await User.findByIdAndUpdate(req.body.Sender._id, {
                $inc: { Balance: req.body.Amount }
            })
            // Add the amount to the receiver  
            await User.findByIdAndUpdate(req.body.Receiver._id, {
                $inc: { Balance: -req.body.Amount }
            })
        }
        // Update the request status
        await Request.findByIdAndUpdate(req.body._id, {
            Status: req.body.Status
        })
        res.send({
            data: null,
            message: "Request status updated successfully",
            success: true
        })
    } catch (error) {
        res.send({
            data: error,
            message: error.message,
            success: false
        })
    }
})

module.exports = router