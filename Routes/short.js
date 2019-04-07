const express = require('express');
const router = express.Router();
const hash_url = require('../src/controller/shortController');
const shortid = require('shortid');

router.get('/:id', (req, res) => {
    const url_hash = shortid.generate();
    return res.send({ message:`GET in short is ok! ${url_hash}` });
})

module.exports = router