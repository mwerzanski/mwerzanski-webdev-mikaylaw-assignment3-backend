const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const InfoRouter = require('./routers/URLRouter');

const app = express();

const port = process.env.PORT || 5002;

app.use(express.json());
//app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const mongoDBEndpoint = 'mongodb://127.0.0.1/assignment3';
mongoose.connect(mongoDBEndpoint, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to mongo db'));
app.use(cors());

app.use('/api/urlShortener', InfoRouter);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// //const mongoose = require('mongoose');
// const InfoRouter = require('./routers/randomUrlRouter');

// const app = express();

// const port = process.env.PORT || 5002; //change 5002 to heroku?

// app.use(express.json());
// //app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());

// app.use('/api/urlShortener', InfoRouter);

// // console.log that your server is up and running
// app.listen(port, () => console.log(`Listening on port ${port}`));
