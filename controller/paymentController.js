const Payment = require("../models/payment");

async function getPayments(req, res) {
    try {
        const payments = await Payment.find();

        return res.status(200).json({
            message: "All Payments",
            payments: payments
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}

async function getPaymentById(req, res) {
    try {
        const payment = await Payment.findById(req.params.id);

        if (!payment) {
            return res.status(404).json({
                message: "Payment not found"
            });
        }

        return res.status(200).json({
            message: "Payment Details",
            payment: payment
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}

async function addPayment(req, res) {
    try {
        const payment = await Payment.create(req.body);

        return res.status(201).json({
            message: "Payment Added Successfully",
            payment: payment
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}

async function updatePayment(req, res) {
    try {
        const payment = await Payment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!payment) {
            return res.status(404).json({
                message: "Payment not found"
            });
        }

        return res.status(200).json({
            message: "Payment Updated Successfully",
            payment: payment
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}

async function deletePayment(req, res) {
    try {
        const payment = await Payment.findByIdAndDelete(req.params.id);

        if (!payment) {
            return res.status(404).json({
                message: "Payment not found"
            });
        }

        return res.status(200).json({
            message: "Payment Deleted Successfully",
            payment: payment
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}

module.exports = {
    getPayments,
    getPaymentById,
    addPayment,
    updatePayment,
    deletePayment
};