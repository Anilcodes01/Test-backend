require('dotenv').config()
const express = require('express');


const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
   res.send('This is my app and i am learning backend!!')
})

app.listen(port, (req, res) => {
    console.log(`Server app listening on port ${port}`)
})