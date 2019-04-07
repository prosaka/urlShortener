const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
    return res.send({ message: 'GET in root is ok!' })
})
router.post('/', (req, res) => {
    return res.send({ message: 'POST in root is ok!' })
})

module.exports = router