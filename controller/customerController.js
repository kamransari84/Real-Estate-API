const Customer = require("../models/customer");


async function getCustomers(req, res) {
    try {

        const customers = await Customer.find();

        return res.status(200).json({
            message: "All Customers",
            customers: customers
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}


async function getCustomerById(req, res) {
    try {

        const customer = await Customer.findById(req.params.id);

        if (!customer) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }

        return res.status(200).json({
            message: "Customer Details",
            customer: customer
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}


async function addCustomer(req, res) {
    try {

        const {
            customerName,
            mobileNumber,
            email,
            address,
            city,
            state,
            pincode
        } = req.body;

        // Check required fields
        if (
            !customerName ||
            !mobileNumber ||
            !email ||
            !address ||
            !city ||
            !state ||
            !pincode
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check mobile number
        if (mobileNumber.length !== 10) {
            return res.status(400).json({
                message: "Mobile number must be 10 digits"
            });
        }

        // Check duplicate email
        const existingCustomer = await Customer.findOne({ email });

        if (existingCustomer) {
            return res.status(400).json({
                message: "Customer with this email already exists"
            });
        }

        // Create customer
        const customer = await Customer.create({
            customerName,
            mobileNumber,
            email,
            address,
            city,
            state,
            pincode
        });

        return res.status(201).json({
            message: "Customer Added Successfully",
            customer: customer
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}


async function updateCustomer(req, res) {
    try {

        const customer = await Customer.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!customer) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }

        return res.status(200).json({
            message: "Customer Updated Successfully",
            customer: customer
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}

async function deleteCustomer(req, res) {
    try {

        const customer = await Customer.findByIdAndDelete(req.params.id);

        if (!customer) {
            return res.status(404).json({
                message: "Customer not found"
            });
        }

        return res.status(200).json({
            message: "Customer Deleted Successfully",
            customer: customer
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: err.message
        });
    }
}


module.exports = {
    getCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer,
    deleteCustomer
};