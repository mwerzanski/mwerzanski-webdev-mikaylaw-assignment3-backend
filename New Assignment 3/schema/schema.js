const mongoose = require('mongoose');

exports.schema = new mongoose.Schema(
    {
        id: String,
        givenURL: String,
        shortendURL: String,
    },
    {
        collection: 'urlShortener',
    }
);
