const mongoose = require('mongoose');

const URLShortenerSchema = require('./urlshortener.schema').URLShortenerSchema

const URLModel = mongoose.model("Pokemon", URLShortenerSchema);

function createOwnURL(givenURL, expectedURL) {
    return URLModel.postOwnURL(givenURL, expectedURL);
}

function createRandomURL(givenURL) {
    return URLModel.postRandomURL(givenURL);
}

module.exports = {
    createOwnURL, 
    createRandomURL,
}