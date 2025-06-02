const http = require('http');
     
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    const { url, method } = request;

    if (url === "/") {
        if (method === "GET") {
            response.statusCode = 200;
            response.end("This is homepage.");
        } else {
            response.statusCode = 400;
            response.end(`Pages cannot access with ${method} request.`);
        }

    } else if (url === "/about") {
        if (method === "GET") {
            response.statusCode = 200;
            response.end("Hi! This is about pages.");
        } else if (method === "POST") {
            let body = [];
 
            request.on('data', (chunk) => {
              body.push(chunk);
            });
         
            request.on('end', () => {
              body = Buffer.concat(body).toString();
              const {name} = JSON.parse(body);
              response.statusCode = 200;
              response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });

        } else {
            response.statusCode = 400;
            response.end(`About pages cannot access with ${method} request.`);
        }

    } else {
        response.statusCode = 404;
        response.end("Pages not found!");
    }

};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server running in http://${host}:${port}`);
});