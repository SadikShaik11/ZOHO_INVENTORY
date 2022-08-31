const Express = require("express");
const router = Express.Router();
const zohoAuth = require("./zoho.auth");
const zohoItems = require("./zoho.items");
router.use("/v1/auth", zohoAuth);
router.use("/v1/items", zohoItems);
module.exports = router;
