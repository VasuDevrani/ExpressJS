// Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

// Middleware functions can perform the following tasks:---
// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware in the stack.

// req => middleware => res

// if a middleware function is made and it does not have a res to send back then, we need to pass it to another middleware using 'next' else it will block the page...

const express = require('express');

const app = express();

// theres another method by keeping the middleware function in another file and importing them as variables then using...
const logger = (req, res, next) => {
    // any kind of logic
    const method = req.method;
    const url = req.url;
    const date = new Date().getFullYear();
    console.log(method, url, date);
    next()
}

app.get('/', logger, (req, res) => {
    // logger executes here 
    res.send('Home Page');
})

app.get('/About', logger /* logger is not necessary here*/, (req,res) => {
    res.send('About page');
})

// APP.USE can be used to attach logger to multiple request handlers if there are many and hard to write logger manually

// app.use will work onlt for gets undder  it
app.use(logger);
// another way
// app.use('/api', logger); i.e. providing a specific url path as argument

app.get('/movies', (req, res) => {
    res.send('Movies Page');
})

app.get('/reviews', (req, res) => {
    res.send('Reviews Page');
})

app.get('/feedback', (req, res) => {
    res.send('Feedback Page');
})

app.listen(3000);

