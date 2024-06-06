const express = require("express");
const router = express.Router();
const addProducts = require("../controllers/add-users");
router.post("/users", addProducts.users);
exports.routes = router;
