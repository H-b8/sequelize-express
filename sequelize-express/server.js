const express = require('express');
const logger = require('morgan');

const app = express();

const indexRouter = require('./routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

const port = process.env.PORT || 3001;
app.listen(port, function () {
	console.log(`Express app listening on port ${port}`);
});

module.exports = app;