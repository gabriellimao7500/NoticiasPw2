import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve('public')));

app.get('/', function (req, res) {
    let endArquivo = path.resolve('public', 'index.html');
    res.sendFile(endArquivo);
});

app.get('/note1', function (req, res) {
    let endArquivo = path.resolve('public', 'note1.html');
    res.sendFile(endArquivo);
});

app.get('/note2', function (req, res) {
    let endArquivo = path.resolve('public', 'note2.html');
    res.sendFile(endArquivo);
});

app.get('/note3', function (req, res) {
    let endArquivo = path.resolve('public', 'note3.html');
    res.sendFile(endArquivo);
});

app.get('/note4', function (req, res) {
    let endArquivo = path.resolve('public', 'note4.html');
    res.sendFile(endArquivo);
});

app.get('/note5', function (req, res) {
    let endArquivo = path.resolve('public', 'note5.html');
    res.sendFile(endArquivo);
});

app.listen(5000, () => console.log('App rodando na porta 5000'));
