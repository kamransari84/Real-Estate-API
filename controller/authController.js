const User = require("../models/user");
const jwt = require("jsonwebtoken");


async function signup(req, res) {
    try {

        const { name, email, password } = req.body;

        // Check all fields
        if (!name || !email || !password) {
            return res.status(400).send("Please fill email and password");
        }

        // Check user already exists
        const findUser = await User.findOne({ email });

        if (findUser) {
            return res.status(400).send("User already Exist");
        }

        //Payload

        // const userData = {

        // }

        // Create new user
        const user = await User.create({
            name,
            email,
            password
        });

        return res.status(201).send("Signup Successfully");

    } catch (err) {
        console.log(err);
        return res.status(500).send("Server Error");
    }
}


async function login(req, res) {
    try {

        const { email, password } = req.body;

        // Check fields
        if (!email || !password) {
            return res.status(400).send("Please fill email and password");
        }

        // Find user
        const findUser = await User.findOne({ email });

        if (!findUser) {
            return res.status(404).send("User not found");
        }

        // Check password
        if (findUser.password !== password) {
            return res.status(401).send("Invalid password");
        }

        // Generate Token
        const token = jwt.sign(
            {
                id: findUser._id,
                email: findUser.email
            },
            "mysecretkey",
            {
                expiresIn: "1h"
            }
        );

        return res.status(200).json({
            message: "Login Successfully",
            
            token: token
        });

    } catch (err) {
        console.log(err);
        return res.status(500).send("Server Error");
    }
}


function logout(req, res) {
    return res.send("Logout Successfully");
}


function profile(req, res) {
    return res.send("User Profile");
}


module.exports = {
    signup,
    login,
    logout,
    profile
};