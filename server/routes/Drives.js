const express = require("express");
const router = express.Router();
const { Drives, Interfaces, FormFactors } = require("../models");

router.get("/", async (req, res) => {
  const listOfDrives = await Drives.findAll({
    include: [
      {
        model: Interfaces,
        as: "Interface",
      },
      {
        model: FormFactors,
        as: "FormFactor",
      },
    ],
  });
  res.json(listOfDrives);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const drive = await Drives.findByPk(id);
  res.json(drive);
});

router.post("/", async (req, res) => {
  const drive = req.body;
  await Drives.create(drive);
  res.json(drive);
});

module.exports = router;
