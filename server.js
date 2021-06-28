const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    if (req.method === 'GET') {
        let fileUrl = req.url;
        if (fileUrl === '/') {
            fileUrl = '/index.html';
        }

        const filePath = path.resolve('./public' + fileUrl)
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html)');
        res.end(`<html><body><h1>Error 404: ${req.method} not supported</h1></body></html>`);
    }
}); 

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});