var express = require('express')
var app = express()

app.get('/', (req, res)=>{
    res.send('app home')
})

app.get('/api', (req, res)=>{
    res.send('api route')
})

app.listen()
