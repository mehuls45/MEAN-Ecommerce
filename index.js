const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = express.Router();
const config = require('./config/database');
const path = require('path');
const authentication = require('./routes/authentication')(router);
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.Promise = global.Promise
mongoose.connect(config.uri, (err) => {
    if(err) {
        console.log('Could not connect to db');
    } else {
        console.log('Connected to db: ' + config.db);
    }
});

// Middleware

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist/'));
app.use('/authentication', authentication);

app.get('/', (req,res) => {
    res.send(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(3000, () => {
    console.log('Listening on 3000');
});