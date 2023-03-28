const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Routers
const drivesRouter = require("./routes/Drives");
app.use("/drives", drivesRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running");
  });
});
