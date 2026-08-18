const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },

    propertyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Property",
        required: true
    },

    bookingDate: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        default: "Booked"
    }

});

module.exports = mongoose.model("Booking", bookingSchema);