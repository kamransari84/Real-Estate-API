const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({

    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true
    },

    amount: {
        type: Number,
        required: true
    },

    paymentMode: {
        type: String,
        required: true
    },

    paymentDate: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        default: "Pending"
    }

});

module.exports = mongoose.model("Payment", paymentSchema);