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
  const drive = await Drives.findByPk(id, {
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
  res.json(drive);
});

router.post("/", async (req, res) => {
  const drive = req.body;
  await Drives.create(drive);
  res.json(drive);
});

router.put("/update/:id", async (req, res) => {
  const id = req.params.id;

  await Drives.update(
    {
      brand: req.body.brand,
      model: req.body.model,
      rotation_speed: req.body.rotation_speed,
      price: req.body.price,
      InterfaceId: req.body.InterfaceId,
      FormFactorId: req.body.FormFactorId,
    },
    { returning: true, where: { id: id } }
  );
});

module.exports = router;
