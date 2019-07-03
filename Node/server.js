let express = require('express');
let app = express();
let mongoose = require('mongoose');
let morgan = require('morgan');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

let bodyParser = require('body-parser');
let port = 8080;
let book = require('./app/routes/book');
let user = require('./app/routes/user');

let config = require('config'); //we load the db location from the JSON files
//db options
let options = {
    server: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: 30000
        }
    },
    replset: {
        socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: 30000
        }
    }
};

//db connection      
mongoose.connect(config.DBHost, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//don't show the log when it is test
if (config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

// adding allow access controll
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//parse application/json and look for raw text                                        
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/json'
}));

/* 
adding jwt for below api 
like:- http://localhost:8080/api/authenticate
http://localhost:8080/api/data
*/
app.set('secrectKey', config.secret); // secret variable
var routesApi = express.Router();
const auth = require('./app/routes/authenticate');
routesApi.post('/authenticate', auth.authenticate);
app.use('/api',routesApi);
// ending jwt

// route
app.get("/", (req, res) => res.json({
    message: "Welcome to our Demo"
}));

app.route("/book")
    .get(book.getBooks)
    .post(book.postBook);
app.route("/user")
    .get(user.getUsers)
    .post(user.postUser);
app.route("/book/:id")
    .get(book.getBook)
    .delete(book.deleteBook)
    .put(book.updateBook);

app.route("/login")
    .post(user.login);

app.route("/register")
    .post(user.register);

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing