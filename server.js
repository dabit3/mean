var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    expressLayouts = require('express-ejs-layouts'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV;
env = "production";

var app = express();

app.set('layout', 'layout.ejs');
app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(logger('dev'));

app.use(express.static(__dirname + '/public'));

if (env === 'development') {
    mongoose.connect('mongodb://localhost/mean');
} else {
    mongoose.connect('mongodb://dabit3:21street@ds063439.mongolab.com:63439/mean');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('Mean db opened');
});

/* var Schema = mongoose.Schema;
var messageSchema = new Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function (err, messageDoc) {
    mongoMessage = messageDoc.message;
}); */

app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath)
});

app.get('*', function(req, res) {
    res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port)