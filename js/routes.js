const express = require('express')
const path    = require('path')

module.exports = function(app){
    app.use('/css', express.static('views/css'))
    app.use('/js' , express.static('views/js') )

    app.get('/', function(req, res){
        res.render('index');
    });
    app.get('/info', function(req, res){
        res.render('info');
    });

}