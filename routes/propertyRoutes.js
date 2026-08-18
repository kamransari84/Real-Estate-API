const express = require("express");
const router = express.Router();
console.log("PROPERTY ROUTES LOADED");



const {
    getProperty,
    addProperty,
    updateProperty,
    deleteProperty,
} = require("../controller/propertyController");


router.get("/", getProperty);

router.post("/", addProperty);


// PUT without ID
router.put("/", (req, res) => {
    return res.status(400).json({
        message: "Id not available"
    });
});


// PUT with ID
router.put("/:id", updateProperty);


// DELETE without ID
router.delete("/", (req, res) => {
    console.log("DELETE WITHOUT ID ROUTE HIT");

    return res.status(400).json({
        message: "Id not available"
    });
});


// DELETE with ID
router.delete("/:id", deleteProperty);


module.exports = router;