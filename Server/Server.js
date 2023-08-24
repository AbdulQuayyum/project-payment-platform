const express = require('express')
const cors = require("cors");
const bodyParser = require("body-parser");

require('dotenv').config()

const DatabaseConfiguration = require("./Configurations/Database.Configuration")
const UserRoute = require("./Routes/User.Routes")
const TransactionRoute = require("./Routes/Transactions.Routes")
const RequestRoute = require("./Routes/Requests.Routes")

const app = express()
const port = process.env.PORT || 8080

app.use(cors());
app.use(bodyParser.json());
app.use("/v1/Users", UserRoute)
app.use("/v1/Transactions", TransactionRoute)
app.use("/v1/Requests", RequestRoute)

app.listen(port, () => console.log(`Project running on port ${port}!`))