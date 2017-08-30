import * as express from 'express';

const app = express();

class Hero {
    constructor(public id: number,
                public name: string) {
    }
}

let heroes: Hero[] = [
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

app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/api/heroes', (req, res) => {
    let result = heroes;
    let params = req.params;
    if (params.name && result.length) {
        result = result.filter(hero => hero.name.indexOf(params.name) !== -1);
    }
    res.json(result);
});

app.get('/api/hero/:id', (req, res) => {
    res.json(heroes.find(hero => hero.id === +req.params.id));
});
app.post('/api/addHero', (req, res) => {
    let newHero: Hero = new Hero(req.body.hero.id, req.body.hero.name);
    heroes.unshift(newHero);
    res.json({
        code: 0,
        msg: '添加成功！'
    });
});
app.post('/api/updateHero', (req, res) => {
    for (let hero of heroes) {
        if (req.body.hero.id === hero.id) {
            hero.name = req.body.hero.name;
        }
    }
    res.json({
        code: 0,
        msg: '修改成功！'
    });
});
app.post('/api/deleteHero', (req, res) => {
    let i = 0;
    for (let hero of heroes) {
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
app.listen(8000, 'localhost', () => {
    console.log('服务器已经启动：http://localhost:8000');
});