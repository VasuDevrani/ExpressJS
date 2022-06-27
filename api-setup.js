// These apis can be used to make some cool frontend by extracting the objects and related data from response.json

const express = require('express')
// sending json file as response 
const games = require('./json-data')
const app = express();

// .json method is a middleware method that is used to access the req and res objects and send a json response to the client

// therefore when on port 3000, user request for page '/' he gets the json data as response

app.get('/', (req,res) => {
    // res.json([{name: 'vasu'}, {name: 'susan'}])
    res.json(games);
})

// using express routing to access individual objects from json array
app.get('/api/products/:id', (req,res) => {
    console.log(req.params);

    const {id} = req.params; // here id is a string and need to be a number to compare in find function
    // or const id = req.params.id
    const singleGame = games.find((game) => game.id === Number(id));

    if(!singleGame){
        // here we need to write return
        return res.status(404).send ("product does not exist");
    }
    res.json(singleGame);
})

// route parameter can be way more complex as---
// /api/products/:id/reviews/:id/name


app.listen(3000, () => {
    console.log('server is running');
})
