const express = require("express");
const router = express.Router();

const {
    signup,
    login,
    logout,
    profile
} = require("../controller/authController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", profile);

module.exports = router;