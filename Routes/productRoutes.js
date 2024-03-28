const express = require("express");
const router = express.Router();
const {
  CreateProduct,
  FetchAvailableProducts,
} = require("../Controller/shoppingController");

// BASIC  HTTP REQUESTS:
// POST
// GET
// PATCH
// PUT
// DELETE

router.post("/postProduct", CreateProduct);
router.get("/getProducts", FetchAvailableProducts);

module.exports = router;
