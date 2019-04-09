const express = require('express')
const Urls = require('../src/model/url')
const router = express.Router();
const path = require('path')


router.get('/', async (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public')})
})

router.get('/list', async (req, res) => {
    const list = await Urls.find({})
    return res.json(list)
})

router.get('/:short', async (req, res) => {
    let short = req.params.short

    if (!short) return res.send({ error: 'Id inválido!'})
    

    try {
        const url = await Urls.find({ short }, 'url')
    
        return res.redirect( url[0].url )
         
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