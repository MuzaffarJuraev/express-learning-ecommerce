/**
 * todo | create a server on port 8000; || done
 * todo | add middlewares; || done
 * todo | find endpoints; || done
 * todo | create routes to every endpoints
 * todo | connect routes with app.js
 */

/**
 * * endpoints!
 * * /computes
 * * /monitors
 * * /phones
 * * /accecories
 * * /tv
 * * /appliances
 */

const express = require("express");
const app = express();
const {
  accecoriesRoute,
  appliancesRoute,
  computersRoute,
  monitorsRoute,
  phonesRoute,
  tvsRoute,
} = require("./route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/accecories", accecoriesRoute);
app.use("/api/v1/appliances", appliancesRoute);
app.use("/api/v1/computes", computersRoute);
app.use("/api/v1/monitors", monitorsRoute);
app.use("/api/v1/phones", phonesRoute);
app.use("/api/v1/tvs", tvsRoute);

app.listen(8000, () => {
  console.log("server 8000 portida ishlamoqda");
});
