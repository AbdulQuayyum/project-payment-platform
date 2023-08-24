const mongoose = require('mongoose')

const RequestSchema = new mongoose.Schema({
    Sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    Receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    Amount: {
        type: Number,
        required: true,
    },
    Reference: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        default: "Pending",
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Requests", RequestSchema)