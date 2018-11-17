const express = require("express");
const fs = require('fs');
const path    = require("path");
const axios = require('axios');
const http = require('http');
let app = express();

app.listen(1169, (err) => {
    if(err) console.log(err);
    else console.log("Sever start success!");
});

//localhost/about
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/Index.html');
});

app.get('/view/web16.html', (request, response) => {
    axios.get('https://btvn-web16s.herokuapp.com/api/web16').then(function(res){
        let temp00 = "";
        res.data.students.forEach(element => {
            temp00 += '<li>' + element + '</li>';
        });
        var template00 = '<ul>' + temp00 + '</ul>';
        response.send(template00);
    }).catch(function(err){
        response.send(err);
    });
})

app.get('/view/web15.html', (request, response) => {
    axios.get('https://btvn-web16s.herokuapp.com/api/web15').then(function(res){
        let temp00 = "";
        res.data.students.forEach(element => {
            temp00 += '<li>' + element + '</li>';
        });
        var template00 = '<ul>' + temp00 + '</ul>';
        response.send(template00);
    }).catch(function(err){
        response.send(err);
    });
})

app.get('/view/web14.html', (request, response) => {
    axios.get('https://btvn-web16s.herokuapp.com/api/web14').then(function(res){
        let temp00 = "";
        res.data.students.forEach(element => {
            temp00 += '<li>' + element + '</li>';
        });
        var template00 = '<ul>' + temp00 + '</ul>';
        response.send(template00);
    }).catch(function(err){
        response.send(err);
    });
})

app.get('/view/web13.html', (request, response) => {
    axios.get('https://btvn-web16s.herokuapp.com/api/web13').then(function(res){
        let temp00 = "";
        res.data.students.forEach(element => {
            temp00 += '<li>' + element + '</li>';
        });
        var template00 = '<ul>' + temp00 + '</ul>';
        response.send(template00);
    }).catch(function(err){
        response.send(err);
    });
})

app.get('/view/web12.html', (request, response) => {
    axios.get('https://btvn-web16s.herokuapp.com/api/web12').then(function(res){
        let temp00 = "";
        res.data.students.forEach(element => {
            temp00 += '<li>' + element + '</li>';
        });
        var template00 = '<ul>' + temp00 + '</ul>';
        response.send(template00);
    }).catch(function(err){
        response.send(err);
    });
})

app.get('/view/web11.html', (request, response) => {
    axios.get('https://btvn-web16s.herokuapp.com/api/web11').then(function(res){
        let temp00 = "";
        res.data.students.forEach(element => {
            temp00 += '<li>' + element + '</li>';
        });
        var template00 = '<ul>' + temp00 + '</ul>';
        response.send(template00);
    }).catch(function(err){
        response.send(err);
    });
})

app.get('/view/web10.html', (request, response) => {
    axios.get('https://btvn-web16s.herokuapp.com/api/web10').then(function(res){
        let temp00 = "";
        res.data.students.forEach(element => {
            temp00 += '<li>' + element + '</li>';
        });
        var template00 = '<ul>' + temp00 + '</ul>';
        response.send(template00);
    }).catch(function(err){
        response.send(err);
    });
})
