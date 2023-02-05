const { Router } = require("express");
const router = Router();

const accecories = require("./mock");

router.get("/", (req, res) => {
  res.send(accecories);
  res.end();
});

router.post("/", (req, res) => {
  accecories.push(req.body);
  res.end(201);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const accecory = accecories.find((item) => item.id == id);
  res.send(accecory);
  res.end();
});

module.exports = router;
