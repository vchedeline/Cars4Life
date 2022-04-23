const express = require("express");
const router = express.Router();
const carCtrl = require("./car")

router.get("/", carCtrl.index);
router.get("/new", carCtrl.new);
router.delete("/:id", carCtrl.delete);
router.put("/:id", carCtrl.update);
router.post("/:id", carCtrl.create);
router.get("/:id/edit", carCtrl.edit);
router.get("/:id", carCtrl.show);

module.exports = router;
