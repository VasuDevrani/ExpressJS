const express = require('express');
const path = require('path');
const {games, people} = require('./json-data')

const app = express();

app.use(express.static('./operation-frontend/build'))

// GET request - read data
app.get('/', (req, res) => {
    console.log(req.method);
    res.status(200).sendFile(path.join(__dirname,'./operation-frontend/temp.html'))
    // res.status(200).json({success: true});
})

// POST method - send data to server (not using database here)

// this middleware is needed to access the body of post request
app.use( express.urlencoded({extended: false}));

app.post('/mainpage', (req,res) => {
    console.log(req.body);
    console.log(req.method);
    const {name, post} = req.body;
    if(!name || !post){
        return res.status(401).send('Please send proper credentials');
    }
    else{
        if(post === 'student'){
            return res.status(200).send('Welcome to the class, lets study');
        }
        else if(post === 'teacher'){
            return res.status(200).send(`Welcome ${name}, what will you teach today`);
        }
    }
})


// PUT method - app.put
// select the specific object by params and change the property


// DELETE method - app.delete
// Similarly search for the object with specific id fetched by params and delete it using js
// like map and find the object with id and don't include it in new object

app.all('*', (req, res) => {
    res.status(404).send('resource not found');
})

app.listen(3000, () => {
    console.log('server is listening')
});