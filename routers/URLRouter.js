/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { getAllURLs, insertURL, getURL, deleteURL } = require('../models/model');
const { response } = require('express');

// create two routers based on randomURL and setURL
router.get('/', (req, res) => {
    return getAllURLs().then(
        function (response) {
            res.status(200).send(response);
        },
        function (error) {
            return res.status(404).send('Error getting URLs');
        }
    );
});

router.get('/existingURL/:givenURL', (req, res) => {
    let data = req.givenURL;
    return getURL(data).then(
        function (response) {
            res.status(200).send(response);
        },
        function (error) {
            return res.status(404).send('Error getting URLs');
        }
    );
});

router.delete('/api/urlShortener', (req, res) => {
    return deleteURL().then(
        function (response) {
            res.status(200).send(response);
        },
        function (error) {
            return res.status(404).send('Error getting URLs');
        }
    );
});

router.post('/', (req, res) => {
    const data = req.body;
    const urlId = uuidv4();
    let urlObj = {
        id: urlId,
        givenURL: data.givenURL,
        shortendURL: `${process.env.PORT || 5002}` + urlId,
    };
    console.log(urlObj);
    insertURL(urlObj).then(
        function (response) {
            return res.status(200).send(response);
        },
        function (error) {
            return res.status(404).send('Erorr adding URL');
        }
    );
});

router.post('/setURL', (req, res) => {
    const data = req.body;
    const urlId = uuidv4();
    let urlObj = {
        id: urlId,
        givenURL: data.givenURL,
        shortendURL: data.shortendURL,
    };
    console.log(urlObj);
    insertURL(urlObj).then(
        function (response) {
            return res.status(200).send(response);
        },
        function (error) {
            return res.status(404).send('Erorr adding URL');
        }
    );
});

router.put('/:id', function (req, res) {
    const data = req.body;
    const urlId = uuidv4();
    let urlObj = {
        id: urlId,
        givenURL: data.givenURL,
        shortendURL: data.shortendURL,
    };
    console.log(urlObj);
    insertURL(urlObj).then(
        function (response) {
            return res.status(200).send(response);
        },
        function (error) {
            return res.status(404).send('Erorr adding URL');
        }
    );
});

module.exports = router;
