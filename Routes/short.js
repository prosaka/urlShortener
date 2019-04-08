const express = require('express');
const router = express.Router();
const Urls = require('../src/model/url');

router.post('/', async (req, res) => {
    const { url }  = req.body
    
    if(!url) return res.send({ error: 'url inválida' })
    
    if( await Urls.findOne({ url })) {
        let urlCreated = await Urls.find({ url }, 'shortUrl')

        return res.json(urlCreated)
    }
    try {
    
        const newUrl = await Urls.create(req.body)
        
        return res.send({ newUrl })
    }
    catch ( err ) {
        return res.send({ error: 'Erro ao criar um novo usúario!' + err})
    }
})

module.exports = router