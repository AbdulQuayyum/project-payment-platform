const router = require("express").Router()

const AuthMiddleware = require("../Middlewares/Auth.Middleware")
const Transaction = require("../Models/Transaction.Model")
const User = require("../Models/User.Model")

// Transfer money from one account to another
router.post("/TransferFunds", AuthMiddleware, async (req, res) => {
    try {

        // Save the transaction
        const NewTransaction = new Transaction(req.body)
        await NewTransaction.save()

        // Decrease the Sender's balance
        await User.findByIdAndUpdate(req.body.Sender, {
            $inc: { Balance: -req.body.Amount }
        })

        // Increase the Receiver's balance
        await User.findByIdAndUpdate(req.body.Receiver, {
            $inc: { Amount: req.body.Amount }
        })

        res.send({
            message: "Transaction Successful",
            data: NewTransaction,
            success: true
        })
    } catch (error) {
        res.send({
            message: "Transaction Failed",
            data: error.message,
            success: false
        })
    }
})

// Verify the Reciever's Account Number
router.post("/VerifyAccount", AuthMiddleware, async (req, res) => {
    try {
        const NewUser = await User.findOne({ _id: req.body.Receiver })
        if (NewUser) {
            res.send({
                message: "Account was successfully verified",
                date: NewUser,
                success: true
            })
        } else {
            res.send({
                message: "Account was not found",
                data: null,
                success: false
            })
        }
    } catch (error) {
        res.send({
            message: "Account was not found",
            data: error.message,
            success: false
        })
    }
})

// Get all transactions for a user
router.post("/GetAllTransactionsByUser", AuthMiddleware, async (req, res) => {
    try {
        const NewTransaction = await Transaction.find({
            $or: [{ Sender: req.body.UserID }, { Receiver: req.body.UserID }]
        }).sort({ createdAt: -1 }).populate("Sender").populate("Receiver")
        res.send({
            message: 'Transactions fetched successfully',
            data: NewTransaction,
            success: true
        })
    } catch (error) {
        res.send({
            message: "Error in fetching Transactions",
            data: error.message,
            success: false
        })
    }
})

module.exports = router