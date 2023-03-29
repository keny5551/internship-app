const express = require("express");
const router = express.Router();
const { Interfaces } = require("../models");

router.get("/", async (req, res) => {
  const listOfInterfaces = await Interfaces.findAll();
  res.json(listOfInterfaces);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const interface = await Interfaces.findByPk(id);
  res.json(interface);
});

router.post("/", async (req, res) => {
  const interface = req.body;
  await Interfaces.create(interface);
  res.json(interface);
});

module.exports = router;
