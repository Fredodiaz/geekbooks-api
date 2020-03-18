// Imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// DB Config
const DB = require('./config/keys').mongoURI

// Connect to Mongo
mongoose
    .connect(DB)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))