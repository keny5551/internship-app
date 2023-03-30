const express = require("express");
const router = express.Router();

const formfactors = require("../controllers/formfactors.js");

// Retrieve all form factors
router.get("/", formfactors.findAll);

// Retrieve a single form factor with id
router.get("/:id", formfactors.findOne);

// Add a new form factor
router.post("/", formfactors.add);

module.exports = router;
