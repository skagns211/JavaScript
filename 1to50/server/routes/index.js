var express = require("express");
var router = express.Router();
const record = require("./record");

router.use("/record", record);

module.exports = router;
