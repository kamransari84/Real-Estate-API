const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/RealEstate")
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoose;