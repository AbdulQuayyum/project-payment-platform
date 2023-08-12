const express = require('express')
require('dotenv').config()

const DatabaseConfiguration = require("./Configurations/Database.Configuration")

const app = express()

const port = process.env.PORT || 8080

app.get('/', (req, res) => res.send('Heyy There!'))
app.listen(port, () => console.log(`Project running on port ${port}!`))