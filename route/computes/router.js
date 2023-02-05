const { Router } = require("express");
const router = Router();

//! mock data
const computers = require("./mock");

router.get("/", (req, res) => {
  res.send(computers);
  res.end();
});

router.post("/", (req, res) => {
  computes.push(req.body);
  res.end();
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const computer = computers.find((item) => item.id == id);
  res.send(computer);
  res.end();
});

module.exports = router;
