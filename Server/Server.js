const express = require('express')
const cors = require("cors");
require('dotenv').config()

const DatabaseConfiguration = require("./Configurations/Database.Configuration")
const UserRoute = require("./Routes/User.Routes")

const app = express()
const port = process.env.PORT || 8080

app.use(cors());
app.use("/v1/Users", UserRoute)

app.listen(port, () => console.log(`Project running on port ${port}!`))