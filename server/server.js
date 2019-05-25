const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//server call import
const users = require('./Routes/api/Users');

const app = express();
app.use(bodyParser.json());

const db = require('../config/keys').mongoURI;

mongoose
    .connect(db,{ useNewUrlParser: true })
    .then(() => console.log("Mongo database connected"))
    .catch(err => console.log(err));

app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server is listening on port ' + port));
