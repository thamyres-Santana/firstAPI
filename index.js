const express = require('express');

const app = express();

app.get('/', function(req, res, next){
    console.log('Rota / foi chamada');
    res.send('Esta é a rota raiz da aplicação!');
});

app.listen(3000, () => {
    console.log('A aplicação está rodando');
}); 
