
//Command to install express Js:
// npm install express --save


const express = require('express')
const app = express()
const port = 3000
var path = require('path');


//simple get
app.get('/', (req, res) => res.send('What’s my destiny, Mama?'))


//serving html
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//serving assets
app.use('/assets',express.static(__dirname + '/assets/'));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))