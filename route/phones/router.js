const { Router } = require("express");
const router = Router();

const phones = require("./mock");

router.get("/", (req, res) => {
  res.send(phones);
  res.end();
});

router.post("/", (req, res) => {
  phones.push(req.body);
  res.end();
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const phone = phones.find((item) => item.id == id);
  res.send(phone);
  res.end();
});

module.exports = router;
