const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");

const {
    getCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer,
    deleteCustomer
} = require("../controller/customerController");

router.get("/", authMiddleware, getCustomers);

router.get("/:id", getCustomerById);

router.post("/", addCustomer);

router.put("/:id", updateCustomer);

router.delete("/:id", deleteCustomer);

module.exports = router;