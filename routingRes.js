const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My From</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" placeholder="Enter Message"></input></form></body>');
        res.write('</html>');
        return res.end()
    }

    res.setHeader("Context-Type", "text/html");
    res.write('<html>');
    res.write('<head><title>My Message</title></head>');
    res.write('<body><h1>Hello This is message from Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

})

server.listen(3000);