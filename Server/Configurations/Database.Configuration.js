const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

const ConnectionResult = mongoose.connection

ConnectionResult.on('error', () => {
    console.error(console, "Error in connecting to Database...")
})
ConnectionResult.on("connected", () => {
    console.log("Successfully connected to Database...")
})

module.exports = ConnectionResult