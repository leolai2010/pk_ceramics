const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname+'/client/build/'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

require('./server/config/mongoose.js');
require('./server/models/Ceramics.js')
require('./server/config/routes.js')(app)
require('./server/controllers/ceramiccontrollers.js')

app.listen(8000, ()=> {
    console.log("listening on port 8000");
});