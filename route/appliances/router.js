const { Router } = require("express");
const router = Router();

const appliances = require("./mock");

router.get("/", (req, res) => {
  res.send(appliances);
  res.end();
});

router.post("/", (req, res) => {
  appliances.push(req.body);
  res.end();
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const appliancy = appliances.find((item) => item.id == id);
  res.send(appliancy);
  res.end();
});

module.exports = router;
