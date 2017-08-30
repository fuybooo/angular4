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
var heroes = [
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
app.get('/api/heroes', function (req, res) {
    var result = heroes;
    var params = req.params;
    if (params.name && result.length) {
        result = result.filter(function (hero) { return hero.name.indexOf(params.name) !== -1; });
    }
    res.json(result);
});
app.get('/api/hero/:id', function (req, res) {
    res.json(heroes.find(function (hero) { return hero.id === +req.params.id; }));
});
app.post('/api/addHero', function (req, res) {
    var newHero = new Hero(req.body.hero.id, req.body.hero.name);
    heroes.unshift(newHero);
    res.json({
        code: 0,
        msg: '添加成功！'
    });
});
app.post('/api/updateHero', function (req, res) {
    for (var _i = 0, heroes_1 = heroes; _i < heroes_1.length; _i++) {
        var hero = heroes_1[_i];
        if (req.body.hero.id === hero.id) {
            hero.name = req.body.hero.name;
        }
    }
    res.json({
        code: 0,
        msg: '修改成功！'
    });
});
app.post('/api/deleteHero', function (req, res) {
    var i = 0;
    for (var _i = 0, heroes_2 = heroes; _i < heroes_2.length; _i++) {
        var hero = heroes_2[_i];
        i++;
        if (req.body.id === hero.id) {
            heroes.splice(i, 1);
        }
    }
    res.json({
        code: 0,
        msg: '删除成功！'
    });
});
app.listen(8000, 'localhost', function () {
    console.log('服务器已经启动：http://localhost:8000');
});
