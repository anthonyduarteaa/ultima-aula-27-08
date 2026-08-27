const http = require('http');
const hostname = '127.0.0.1';
const port = 2500;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(JSON.stringify({ mensagem: 'Nigger' }));
});

server.listen(port, hostname, () => {
    console.log(`Servidor Nigger Rodando em http://${hostname}:${port}/`)
});