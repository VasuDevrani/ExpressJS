const express = require('express');
const path = require('path')

const app = express();

// adding all resources files to a folder like public or build and using 'use' method can help prevent using multiple if else as in http based server

// here static means a file that need not be changed
// can even add html file to build as it is static as well
app.use(express.static('./test-bundle/public'))

app.get('/', (req,res) =>{
    // path is necessary
    res.status(200).sendFile(path.join(__dirname,'./test-bundle/test.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found');
})

app.listen(3000, () =>{
    console.log('server')
})