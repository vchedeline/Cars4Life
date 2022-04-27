const express = require("express");
const router = express.Router();
const carActions = require("./CarActions");

router.get("/", carActions.index);
router.get("/seed", carActions.seed);
router.get("/new", carActions.new);
router.delete("/:id", carActions.delete);
router.put("/:id", carActions.update);
router.post("/", carActions.create);
router.get("/:id/edit", carActions.edit);
router.get("/:id", carActions.show);

module.exports = router;
