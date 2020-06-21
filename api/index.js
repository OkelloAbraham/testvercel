
module.exports = (req, res)=>{

    
    var express = require('express');
    
    var app = express()
    
    app.get('/test', (req,res)=>{
        res.send('server working')
    })
    
    // app.listen('3000')
}