const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");

const drivesRouter = require("./routes/drives");
const interfacesRouter = require("./routes/interfaces");
const formFactorRouter = require("./routes/formfactors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

//Routers
app.use("/api/drives", drivesRouter);
app.use("/api/interfaces", interfacesRouter);
app.use("/api/formfactors", formFactorRouter);

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// to drop existings tables and re-sync database
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
