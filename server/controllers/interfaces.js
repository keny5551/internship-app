const { Interfaces } = require("../models");

exports.findAll = (req, res) => {
  Interfaces.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while retrieving interface.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Interfaces.findByPk(id).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find interface with id=${id}.`,
      });
    }
  });
};

exports.add = (req, res) => {
  const interface = req.body;
  Interfaces.create(interface)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while adding new interface.",
      });
    });
};
