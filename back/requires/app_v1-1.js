var express = require('express');
var morgan = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

// var corsOptions = {
//     origin: "http://localhost:8080"
// };
//
// app.use(cors(corsOptions));

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({origin: [
  "http://localhost:8082","http://localhost:8080"
], credentials: true}));


// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_id',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 365 * 24 * 60 * 60 * 1000}
}));

var User = require('../routes/user');
app.use('/users', User);

module.exports = app;