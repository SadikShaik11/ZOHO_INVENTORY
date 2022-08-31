// const { zohoAuthController } = require(".");
const { zohoAuthService } = require("../services");

const generateToken = async (req, res) => {
  const data = await zohoAuthService.generateToken();
  res.status(200).json({ data });
};
const generateTokenWithRefreshToken = async (req, res) => {
  const data = await zohoAuthService.generateTokenWithRefreshToken(
    req.body.refresh_token
  );
  res.status(200).json({ data });
};
module.exports = {
  generateToken,
  generateTokenWithRefreshToken,
};
