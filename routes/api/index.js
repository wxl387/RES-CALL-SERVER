const router = require("express").Router();
const addUserRoutes = require("./adduser.js");
const checkUserRoutes = require("./checkuser.js");

router.use("/adduser", addUserRoutes);
router.use("/checkuser", checkUserRoutes);

module.exports = router;