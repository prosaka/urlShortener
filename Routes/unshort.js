const express = require('express');
const router = express.Router();
const Urls = require('../src/model/url');

router.get('/:short', async (req, res) => {
    const short = req.params.short

    if (!short) return res.send({ error: 'Id inválido!'})

    try {
        const url = await Urls.find({ short }, 'url')
        
        return res.send(url)
    }
    catch (err) {
        return res.send({ error: 'Erro ao buscar o Id'})
    }
})


module.exports = router