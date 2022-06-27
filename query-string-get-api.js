const games = require('./json-data');

const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.json(games);
    console.log("home page");
})

app.get('/api/v1/query', (req, res) => {

    // request url looks like this 'http://localhost:3000/api/v1/query?search=D&limit=4'
    console.log(req.query);
    const { search, limit } = req.query;
    let sortedGames = [...games]

    if(search){
        sortedGames = sortedGames.filter((game) => {
            return game.title.startsWith(search);
        })
    }
    if(limit){
        sortedGames = sortedGames.slice(0, Number(limit));
    }
    if(sortedGames.length < 1)
    {
        return res.status(200).send("nothing to show")
    }
    // console.log(sortedGames);
    res.status(200).json(sortedGames);
})

app.get('*', (req,res) => {
    res.send('error occured');
})


app.listen(3000, () => {
    console.log('server is running');
})