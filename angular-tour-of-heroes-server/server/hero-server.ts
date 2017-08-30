import * as express from 'express';

const app = express();

class Hero {
    constructor(
        public id: number,
        public name: string
    ) {}
}

const HEROES: Hero[] = [
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

app.get('/heroes', (req, res) => {
    res.json(HEROES);
});

app.get('/heroe/:id')

app.listen(8000, 'localhost', () => {
    console.log('服务器已经启动：http://localhost:8000');
});