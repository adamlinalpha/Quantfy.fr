const mongoose = require ('mongoose');
const express=require('express');
const app=express()
var path = require('path');
let bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.listen(3000, function () {
    console.log("Server listening on PORT 3000");
});

app.get('/home', function (req,res) {
    res.render('homepage.ejs')
});
app.get('/montecarlo', function (req,res) {
    res.render('temporary.ejs')
});
app.post('/montecarlo', function (req,res) {
    console.log(req.body)
    res.render('montecarloresult.ejs')
});
app.get('/dcf', function (req,res) {
    res.render('dcf.ejs')
});
app.get('/news', function (req,res) {
    res.render('news.ejs')
});
app.get('/analysis', function (req,res) {
    res.render('analysis.ejs')
});
app.get('/aboutme', function (req,res) {
    res.render('aboutme.ejs')
});
app.get('/contactme', function (req,res) {
    res.render('contactme.ejs')
});