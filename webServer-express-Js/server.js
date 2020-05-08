
//Command to install express Js:
// npm install express --save


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('What’s my destiny, Mama?'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))