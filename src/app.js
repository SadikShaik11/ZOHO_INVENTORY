const bodyParser = require("body-parser");
const Express = require("express");
const { use } = require("./routes");
const routes = require("./routes");
const app = Express();
require("dotenv").config();
app.use(Express.json());
app.use(routes);
app.use("/", (req, res) => {
  res.send("we are monitoring it ");
});
function server() {
  app.listen(3000);
  console.log("connected to port 3000");
}
server();
