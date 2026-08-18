const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({

    propertyName: {
        type: String,
        required: true
    },

    propertyType: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    area: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        default: "Available"
    }

});

module.exports = mongoose.model("Property", propertySchema);