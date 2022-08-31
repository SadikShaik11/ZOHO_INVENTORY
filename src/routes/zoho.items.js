const Express = require("express");
const { zohoItemsController } = require("../controllers");
const router = Express.Router();
router.route("/").get(zohoItemsController.getItems);
router.route("/").post(zohoItemsController.addItems);
module.exports = router;
