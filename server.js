const express = require('express');
const logger = require('morgan');

const app = express();
const router = express.Router();

app.use(logger('dev')); // setting up morgan middleware to provide extra info for each req to the server
app.use(express.json); // body parser
app.use(express.urlencoded({extended: false})); // body parser

app.get('/', function (req, res) {
    console.log('hitting')
    res.send('wweeeeeeeee')
})

const port = process.env.PORT || 3001;
app.listen(port, function () {
	console.log(`Express app listening on port ${port}`);
});