const express = require("express");
const protectRoute = require("../middleware/protectRoute");
const getusersforsidebar = require("../Controllers/users.controller");
const router = express.Router()

router.get('/', protectRoute, getusersforsidebar)

module.exports= router;
