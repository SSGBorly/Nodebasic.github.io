
const http = require('http')

const server = http.createServer((req, res) => {
    res.end('<h1>hello from NodeJS Server</h1>');
});

server.listen(5000);




