const { Router } = require("express");
const router = Router();

const monitors = require("./mock");

router.get("/", (req, res) => {
  res.send(monitors);
  res.end();
});

router.post("/", (req, res) => {
  monitors.push(req.body);
  res.end();
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const monitor = monitors.find((item) => item.id == id);
  res.send(monitor);
  res.end();
});

module.exports = router;
