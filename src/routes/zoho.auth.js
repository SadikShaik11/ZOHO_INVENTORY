const Express = require("express");
const { zohoAuthController } = require("../controllers");
const router = Express.Router();
//one time usable
router.route("/generate-tokens").get(zohoAuthController.generateToken);
// generates  Accesstokens with refresh token
router.route("/generate-accesstoken").post(zohoAuthController.generateTokenWithRefreshToken);
module.exports = router;
