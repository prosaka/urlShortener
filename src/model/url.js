const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    url: { type: String, required: true, lowercase: true },
    id: { type: String, default: shortid.generate(), unique: true },
    created: { type: Date, default: Date.now, }
})

module.exports = mongoose.model('Url', urlSchema)