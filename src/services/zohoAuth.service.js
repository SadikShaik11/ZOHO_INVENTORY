const axios = require("axios");
const generateToken = async () => {
  const tokens = await axios
    .post(
      `https://accounts.zoho.in/oauth/v2/token?grant_type=authorization_code&client_id=1000.YU86BAFZSY5ICWERB9TI2ZBX3TEENW&client_secret=bd4fa93cea9e3bee6be1d3474797da301320750c06&code=${process.env.code}`
    )
    .then((token) => {
      return token;
    })
    .catch((err) => {
      return err;
    });
  return tokens.data;
};
const generateTokenWithRefreshToken = async (refreshToken) => {
  const tokens = await axios
    .post(
      `https://accounts.zoho.in/oauth/v2/token?refresh_token=${refreshToken}&client_id=${process.env.client_id}&client_secret=${process.env.client_secret}&grant_type=refresh_token`
    )
    .then((token) => {
      return token;
    })
    .catch((err) => {
      return err;
    });
  return tokens.data;
};
module.exports = {
  generateToken,
  generateTokenWithRefreshToken,
};
