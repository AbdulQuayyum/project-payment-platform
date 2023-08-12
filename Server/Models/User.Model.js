const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    IdentificationType: {
        type: String,
        required: true
    },
    IdentificationNumber: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    IsVerified: {
        type: Boolean,
        default: false
    },
    IsAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("User", UserSchema)