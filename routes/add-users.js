const express = require("express");
const addProducts = require("../controllers/add-users");
const router = express.Router();
router.get("/add-user", addProducts.addProducts);
router.post("/users", addProducts.users);
exports.routes = router;
