// module.exports = (req, res) => {
//     res.send('hello world')
//   }

var express = require('express')
var app = express()

app.get('/api', (req, res)=>{
    res.send('why always you')
})

// app.listen()
