const express = require('express');

// server instance
const app = express();

app.get('/', (req,res)=>{
    // putting a status( ) chain is optional
    res.status(200).send('Home Page')
})

app.get('/About', (req,res) => {
    res.status(200).send('About Page')
})

app.all('*', (req,res) => {
    res.status(404).send('resource not found')
})

app.listen(3000, () => {
    console.log('server is listening')
});


// methods in express - get, post, put, delete, all, use, listen