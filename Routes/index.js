const express = require('express')
const Urls = require('../src/model/url')
const router = express.Router();


router.get('/', async (req, res) => {
    const urls = await Urls.find({});
    return res.json(urls)
})

router.get('/:short', async (req, res) => {
    const short = req.params.short

    if (!short) return res.send({ error: 'Id inválido!'})

    try {
        const url = await Urls.find({ short }, 'url')
        
        return res.json(url)
    }
    catch (err) {
        return res.send({ error: 'Erro ao buscar o Id'})
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    await Urls.findOneAndDelete( id )
    return res.send({ message: 'Url Deleted'})
})

module.exports = router