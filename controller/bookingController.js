const Booking = require("../models/booking");

async function getBookings(req, res) {
    try {
        const bookings = await Booking.find();

        return res.status(200).json({
            message: "All Bookings",
            bookings: bookings
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}

async function getBookingById(req, res) {
    try {
        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({
                message: "Booking not found"
            });
        }

        return res.status(200).json({
            message: "Booking Details",
            booking: booking
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}

async function addBooking(req, res) {
    try {

        const booking = await Booking.create(req.body);

        return res.status(201).json({
            message: "Booking Added Successfully",
            booking: booking
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}

async function updateBooking(req, res) {
    try {
        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!booking) {
            return res.status(404).json({
                message: "Booking not found"
            });
        }

        return res.status(200).json({
            message: "Booking Updated Successfully",
            booking: booking
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}

function deleteBooking(req, res) {
    return res.send("Booking Deleted");
}

module.exports = {
    getBookings,
    getBookingById,
    addBooking,
    updateBooking,
    deleteBooking
};