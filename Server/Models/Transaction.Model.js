const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    Amount: {
        type: Number,
        required: true,
    },
    Sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    Receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    // Type: {
    //     type: String,
    //     required: true,
    // },
    Reference: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Transactions", TransactionSchema)