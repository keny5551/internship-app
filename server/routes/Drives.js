const express = require("express")
const router = express.Router()
const { Drives } = require("../models")


router.get("/", async (req,res) => {
    const listOfDrives = await Drives.findAll()
    res.json(listOfDrives)
})


router.post("/", async (req, res) => {
    const drive = req.body
    await Drives.create(drive)
    res.json(drive)
})


module.exports = router