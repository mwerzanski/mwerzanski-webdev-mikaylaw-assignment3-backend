const mongoose = require('mongoose');

const URLSchema = require('../schema/schema').schema;

const URLModel = mongoose.model('URLShortener', URLSchema);

function insertURL(givenURL) {
    return URLModel.create(givenURL);
}

function getAllURLs() {
    return URLModel.find().exec();
}

function getURL(givenURL) {
    return URLModel.findOne(givenURL).exec();
}

function deleteURL(givenURL) {
    return URLModel.deleteOne(givenURL).exec();
}

function updateURL(givenURL) {
    return URLModel.updateOne(givenURL).exec();
}

module.exports = {
    insertURL,
    getAllURLs,
    getURL,
    deleteURL,
    updateURL,
};
