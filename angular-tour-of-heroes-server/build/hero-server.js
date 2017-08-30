"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var Hero = (function () {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    }
    return Hero;
}());
var HEROES = [
    new Hero(1, 'Mr. Fu'),
    new Hero(2, 'Dark'),
    new Hero(3, 'monet'),
    new Hero(4, 'Duck'),
    new Hero(5, 'Ma Yun'),
    new Hero(6, 'Ma Huateng'),
    new Hero(7, 'Li Yanhong'),
    new Hero(8, 'Durex'),
    new Hero(9, 'Six'),
    new Hero(10, 'God Six')
];
app.get('/', function (req, res) {
    res.send('hello express');
});
app.get('/heroes', function (req, res) {
    res.json(HEROES);
});
app.get('/heroe/:id');
app.listen(8000, 'localhost', function () {
    console.log('服务器已经启动：http://localhost:8000');
});
