const app = require('express')()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/entertanme', (err) => {
  err ? console.log('Can\'t connect to database') : console.log('Database connected')
});

var series = require('./routes/series');

app.use('/series', series)
app.listen(3002)
