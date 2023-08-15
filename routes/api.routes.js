const router = require("express").Router();
const Art = require("../models/Art.model");

// all domain/api/* routes

router.get("/", (req, res) => {
  res.json("All good in here");
});

router.get("/art/:technique", async (req, res) => {
  const { technique } = req.params;
  const response = await Art.find({ technique });
  res.status(200).json(response);
});

router.post("/create", async (req, res) => {
  try {
    const newItem = await Art.create(req.body);
    const response = { data: newItem, message: "A new entry has been added to the DB" };
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
