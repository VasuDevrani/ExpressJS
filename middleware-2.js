const express = require('express');
const path = require('path');

const app = express();

const {createUser, authorise} = require('./authorise.js')


// using middleware function directly 
app.get('/', [authorise, createUser], (req, res) => {
    res.send('Home Page');
})


// using two or more functions
app.use([authorise, createUser]);

app.get('/About', (req, res) => {
    res.send('About Page');
})

// express middle ware functions
app.use(express.static('./test-bundle/public'));

app.get('/Items', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'./test-bundle/test.html'))
})

app.listen(3000);

// Middleware functions are of three types - our own / express / third party (like morgan)