const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.controllers");

//routes------
router.get("/", controller.index);
router.get("/hoy", (req, res) => {
  res.send("bienvenidos viernes");
});

module.exports = router;
