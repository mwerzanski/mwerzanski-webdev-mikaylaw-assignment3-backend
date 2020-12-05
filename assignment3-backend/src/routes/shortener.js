const { response } = require('express');
const express = require('express');
const { getURL, createOwnURL } = require('../db/shortener.model');
const router = express.Router();

router.get('/', function (req, res) {
    return getURL()
        .then(function (response) {
            res.status(200).send(response);
        }, function (error) {
            res.status(404).send("Error getting URL");
        })
})

router.post('/', function(req, res) {
    const urlData = req.body;
    console.log(urlData)

    createOwnURL(urlData).then(function (response) {
        return res.status(200).send(response)
        }, function (error) {
                return res.status(500).send("Issue adding pokemon");
        }
    )
})

// router.get('/:id', function (req, res) {
//     const pokemonId = Number(req.params.id);
//     let pokemon = null;
//     for (let i = 0; i < pokemonList.length; i++) {
//         if (pokemonList[i].id === pokemonId) {
//             pokemon = pokemonList[i];
//             break;
//         }
//     }
//     if (!pokemon) {
//         res.status(404);
//         return res.send({ error: 'No pokemon found!' });
//     } else {
//         return res.send(pokemon);
//     }
// })

// router.post('/', function (req, res) {
//     const pokemonData = req.body;
//     console.log(pokemonData);

//     let url = null;
//     createOwnURL(url)
//         .then(function (response) {
//             url = response;
//             return res.status(200).send(response);
//         }, function (error) {
//             return res.status(500).send("Issue adding pokemon");
//         })
//         .then(function () {
//             console.log("insert data successfully!")
//         })
//         .then(function () {
//             console.log(pokemon)
//         })
//         .catch(function() {
//             console.error("couldn't insert pokemon")
//         })
// })

// router.put('/:id', function (req, res) {
//     const pokemonId = Number(req.params.id);
//     const pokemonRequest = req.body;
//     let pokemon = null;
//     for (let i = 0; i < pokemonList.length; i++) {
//         if (pokemonList[i].id === pokemonId) {
//             pokemon = pokemonList[i];
//         }
//     }

//     if (!pokemon) {
//         res.status(404);
//         return res.send({ error: 'No pokemon found!' });
//     }

//     pokemon.health = pokemonRequest.health;
//     pokemon.level = pokemonRequest.level;
//     pokemon.name = pokemonRequest.name;

//     return res.status(200).send('Successfully updated pokemon')
// })

// router.delete('/:id', function (req, res) {
//     const pokemonId = Number(req.params.id);
//     let pokemonIndex = null;
//     for (let i = 0; i < pokemonList.length; i++) {
//         if (pokemonList[i].id === pokemonId) {
//             pokemonIndex = i;
//             break;
//         }
//     }

//     if (pokemonIndex !== null) {
//         pokemonList.splice(pokemonIndex, 1)
//     }
//     res.status(200).send('Pokemon has been removed')

// })

module.exports = router;