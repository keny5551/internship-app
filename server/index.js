const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Routers
const drivesRouter = require("./routes/Drives");
app.use("/drives", drivesRouter);

const interfacesRouter = require("./routes/Interfaces");
app.use("/interfaces", interfacesRouter);

const formFactorRouter = require("./routes/FormFactors");
app.use("/formfactors", formFactorRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running");
  });
});
