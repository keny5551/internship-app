const express = require("express");
const router = express.Router();
const { FormFactors } = require("../models");

router.get("/", async (req, res) => {
  const listofFormFactors = await FormFactors.findAll();
  res.json(listofFormFactors);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const formfactor = await FormFactors.findByPk(id);
  res.json(formfactor);
});

router.post("/", async (req, res) => {
  const formfactor = req.body;
  await FormFactors.create(formfactor);
  res.json(formfactor);
});

module.exports = router;
