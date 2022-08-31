const axios = require("axios");

const getItems = async (accesstoken) => {
  const items = await axios({
    method: "get",
    url: `https://inventory.zoho.in/api/v1/items?organization_id=${process.env.organization_id}`,
    headers: { Authorization: `Zoho-oauthtoken ${accesstoken}` },
  })
    .then((items) => {
      return items;
    })
    .catch((err) => {
      return err;
    });
  //   console.log(items);
  return items.data;
};
const addItems = async (accesstoken, data) => {
  const items = await axios({
    method: "post",
    url: `https://inventory.zoho.in/api/v1/items?organization_id=${process.env.organization_id}`,
    headers: { Authorization: `Zoho-oauthtoken ${accesstoken}` },
    data: data,
  })
    .then((items) => {
      return items;
    })
    .catch((err) => {
      // console.log(err);
      return err;
    });
  return items.data;
};
module.exports = {
  getItems,
  addItems,
};
