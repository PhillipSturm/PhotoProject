const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/:uid").get(userController.find);
router.route("/findById/:id").get(userController.findById);
router.route("/create").post(userController.create);
router.route("/delete/:id").put(userController.delete)
module.exports = router;
