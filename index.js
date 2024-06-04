import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve('public')));

app.get('/', function (req, res) {
    let endArquivo = path.resolve('public', 'index.html');
    res.sendFile(endArquivo);
});

app.listen(3000, () => console.log('App rodando na porta 3000'));
