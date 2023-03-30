const { FormFactors } = require("../models");

exports.findAll = (req, res) => {
  FormFactors.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while retrieving form factors.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  FormFactors.findByPk(id).then((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find form factor with id=${id}.`,
      });
    }
  });
};

exports.add = (req, res) => {
  const formfactor = req.body;
  FormFactors.create(formfactor)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while adding new form factor.",
      });
    });
};
