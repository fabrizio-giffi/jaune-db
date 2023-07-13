const router = require("express").Router();
const Art = require("../models/Art.model");

// all domain/api/* routes

router.get("/", (req, res) => {
  res.json("All good in here");
});

router.post("/create", (req, res) => {
  console.log(req.body);
  const { url, name, year, description, technique, size, sale } = req.body;
  console.log(url, name, year, description);
  res.json("Entry created");
});

//
// router.post("/", async (req, res) => {
//   const test = {
//     url: "www.google.com",
//     name: "Monna Lisa",
//     year: 2021,
//     description: "Pretty picture",
//     technique: "acryl leinwand",
//     size: { height: 30, width: 40 },
//     sale: [
//       { format: "poster", price: 40 },
//       { format: "original", price: 300 },
//     ],
//   };
//   const created = await Art.create(test);
//   res.json("Entry created");
// });

module.exports = router;
