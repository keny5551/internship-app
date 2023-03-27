const express = require('express')
const app = express()
const db = require('./models')

app.use(express.json())

//Routers
const drivesRouter = require('./routes/Drives')
app.use("/drives", drivesRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running")
    })
})