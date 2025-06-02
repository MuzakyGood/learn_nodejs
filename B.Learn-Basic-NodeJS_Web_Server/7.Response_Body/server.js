const http = require('http');
     
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Powered-By', 'Node.js');
    
    const { url, method } = request;

    if (url === "/") {
        if (method === "GET") {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: "This is homepage.",
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Pages cannot access with ${method} request.`,
            }));
        }

    } else if (url === "/about") {
        if (method === "GET") {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: "Hi! This is about pages.",
            }));
        } else if (method === "POST") {
            let body = [];
 
            request.on('data', (chunk) => {
              body.push(chunk);
            });
         
            request.on('end', () => {
              body = Buffer.concat(body).toString();
              const {name} = JSON.parse(body);
              response.statusCode = 200;
              response.end(JSON.stringify({
                message: `Halo, ${name}! Ini adalah halaman about`,
              }));
            });

        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `About pages cannot access with ${method} request.`,
            }));
        }

    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: "Pages not found!",
        }));
    }

};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server running in http://${host}:${port}`);
});