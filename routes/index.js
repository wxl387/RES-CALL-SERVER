const path = require("path");
const router = require("express").Router();
const addUserAPIRoutes = require("./api/adduser.js");
const checkUserAPIRoutes = require("./api/checkuser.js");
// const { addUserAPIRoutes, checkUserAPIRoutes, ifExistsAPIRoutes }  = require ("./api");

// API Routes
router.all('/', function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "X-Requested-With");
 next();
});

router.use("/api/adduser", addUserAPIRoutes);

router.use("/api/checkuser", checkUserAPIRoutes);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});



module.exports = router;
