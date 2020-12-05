const mongoose = require('mongoose');

exports.URLShortenerSchema = new mongoose.Schema({
    givenURL: String,
    shortenedURL: String
}, {
    collection: 'URLShortener'
})