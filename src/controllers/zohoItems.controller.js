const { zohoItemsService } = require("../services");
const getItems = async (req, res) => {
  const data = await zohoItemsService.getItems(req.headers.access_token);
  res.status(200).json({ data });
};
const addItems = async (req, res) => {
  const data = await zohoItemsService.addItems(
    req.headers.access_token,
    req.body
  );
  res.status(200).json({ data });
};
module.exports = {
  getItems,
  addItems,
};
