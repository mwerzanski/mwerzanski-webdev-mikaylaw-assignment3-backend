const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const URLshortenerRouter = require('./routes/shortener')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoDBEndpoint = process.env.MONGODB_URI || 'mongodb+srv://mwerzanski:Neworleans17!@webdev.7x1yt.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(mongoDBEndpoint, { useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to mongo db'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(cookieParser());

app.use(cors());

app.use('/api/shortener', URLshortenerRouter);

const port = 'mongodb+srv://mwerzanski:Neworleans17!@webdev.7x1yt.mongodb.net/<dbname>?retryWrites=true&w=majority' || 3000;
app.listen(port, function() {
  console.log("starting at" + port);
})