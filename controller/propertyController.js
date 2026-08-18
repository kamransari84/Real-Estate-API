const Property = require("../models/property");
async function getProperty(req, res) {
try {

    const properties = await Property.find();

    return res.status(200).json({
        message: "All Properties",
        properties: properties
    });

} catch (err) {

    console.log(err);

    return res.status(500).json({
        message: err.message
    });
}


}

async function addProperty(req, res) {
try {

    const property = await Property.create(req.body);

    return res.status(201).json({
        message: "Property Added Successfully",
        property: property
    });

} catch (err) {

    console.log(err);

    return res.status(500).json({
        message: err.message
    });
}


}

async function updateProperty(req, res) {
try {

    const property = await Property.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );

    if (!property) {
        return res.status(404).json({
            message: "Property not found"
        });
    }

    return res.status(200).json({
        message: "Property Updated Successfully",
        property: property
    });

} catch (err) {

    console.log(err);

    return res.status(500).json({
        message: err.message
    });
}


}

async function deleteProperty(req, res) {
try {

    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
        return res.status(404).json({
            message: "Property not found"
        });
    }

    return res.status(200).json({
        message: "Property Deleted Successfully",
        property: property
    });

} catch (err) {

    console.log(err);

    return res.status(500).json({
        message: err.message
    });
}


}

module.exports = {
getProperty,
addProperty,
updateProperty,
deleteProperty
};