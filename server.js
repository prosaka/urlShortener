const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRoute = require('./Routes/index');
const indexShort = require('./Routes/short');
const { connect_db, db_opt }  = require('./config/config');
const app = express();

mongoose.connect(connect_db, db_opt);
mongoose.set( 'useCreateIndex', true );

mongoose.connection.on('error', (err) => {
    console.log('Connection with data base error !' + err);
});

mongoose.connection.on('disconnecte', () => {
    console.log('Connection with data base lost!');
});

mongoose.connection.on('connected', () => {
    console.log('Connected with data base!');
});


app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/short', indexShort);

app.listen(3000)

module.exports = app