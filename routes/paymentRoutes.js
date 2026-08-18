const express = require("express");
const router = express.Router();

const {
    getPayments,
    getPaymentById,
    addPayment,
    updatePayment,
    deletePayment
} = require("../controller/paymentController");

router.get("/", getPayments);

router.get("/:id", getPaymentById);

router.post("/", addPayment);

router.put("/:id", updatePayment);

router.delete("/:id", deletePayment);

module.exports = router;