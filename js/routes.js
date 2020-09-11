const express = require('express')
const path    = require('path')

module.exports = function(app){
    app.use('/css', express.static('views/css'))
    app.use('/js' , express.static('views/js') )
    app.use('/assets' , express.static('views/assets') )

    app.get('/', function(req, res){
        res.render('index');
    });
    app.get('/info', function(req, res){
        res.render('info');
    });
    app.get('/contact', function(req, res){
        res.render('contact');
    });
    app.get('/custom(_calc)?', function(req,res){
        res.render('custom_calc')
    })

}