const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({

    customerName: {
        type: String,
        required: true
    },

    mobileNumber: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    address: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    pincode: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model("Customer", customerSchema);