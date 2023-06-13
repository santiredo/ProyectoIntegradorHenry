const http = require('http');
const data = require('./utils/data')

http.createServer((req, res) => {
    const {url} = req;

    res.setHeader('Access-Control-Allow-Origin', '*');

    if(url.includes('/rickandmorty/character')){
        const id = +(url.split('/').at(-1));

        const foundChar = data.find((char) =>  char.id === id)

        res .writeHead(200, {'Content-type': 'application/json'})
            .end(JSON.stringify(foundChar))
    }

}).listen(3001)