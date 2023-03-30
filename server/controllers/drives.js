const { Drives, Interfaces, FormFactors } = require("../models");

exports.findAll = (req, res) => {
  Drives.findAll({
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
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while retrieving drives.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Drives.findByPk(id).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find drive with id=${id}.`,
      });
    }
  });
};

exports.add = (req, res) => {
  const drive = req.body;
  Drives.create(drive)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while adding new drive.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Drives.update(
    {
      brand: req.body.brand,
      model: req.body.model,
      type: req.body.type,
      rotation_speed: req.body.rotation_speed,
      price: req.body.price,
      InterfaceId: req.body.InterfaceId,
      FormFactorId: req.body.FormFactorId,
    },
    { returning: true, where: { id: id } }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Drive was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update drive with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating drive with id=${id}.`,
      });
    });
};
