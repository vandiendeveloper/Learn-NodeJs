const express = require('express');
const app = express();
const port = 3000;
app.listen(port, ()=> {
    console.log('My Server');
})

app.get('/', (req, res)=> {
    res.send('Hello Everyone')
})