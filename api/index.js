const { response } = require('express');

module.exports = (request, response) => {
    var express = require('express');

    var app = express()

    app.get('/test', (req, res) => {
        response.send('server working')
    })

    app.get('/', (req, res) => {
        response.send('server working')
    })

    // app.listen('3000')
}