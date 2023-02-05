const { Router } = require("express");
const router = Router();

const tvs = require("./mock");

router.get("/", (req, res) => {
  res.send(tvs);
  res.end();
});

router.post("/", (req, res) => {
  tvs.push(req.body);
  res.end();
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const tv = tvs.find((item) => item.id == id);
  res.send(tv);
  res.end();
});

module.exports = router;
