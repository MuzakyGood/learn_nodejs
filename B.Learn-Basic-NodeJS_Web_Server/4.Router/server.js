const http = require('http');
     
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    response.statusCode = 200;

    const { url, method } = request;

    if (url === "/") {
        if (method === "GET") {
            response.end("This is homepage.");
        } else {
            response.end(`Pages cannot access with ${method} request.`);
        }

    } else if (url === "/about") {
        if (method === "GET") {
            response.end("Hi! This is about pages.");
        } else if (method === "POST") {
            let body = [];
 
            request.on('data', (chunk) => {
              body.push(chunk);
            });
         
            request.on('end', () => {
              body = Buffer.concat(body).toString();
              const {name} = JSON.parse(body);
              response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });

        } else {
            response.end(`About pages cannot access with ${method} request.`);
        }

    } else {
        response.end("Pages not found!");
    }

};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server running in http://${host}:${port}`);
});

    // if(url === '/') {
    //     // TODO 2: logika respons bila url bernilai '/'
    //     if(method === 'GET') {
    //         response.end('<h1>This is homepage</h1>');
    //     } else {
    //         response.end(`<h1>Page cannot access with ${method} request</h1>`);
    //     }

    // } else if(url === '/about') {
    //     // TODO 3: logika respons bila url bernilai '/about'
    //     if(method === 'GET') {
    //         // respons bila client menggunakan GET
    //         response.end('<h1>Hi!, This is page about</h1>');

    //     } else if(method === 'POST') {
    //         // respons bila client menggunakan POST
    //         let body = [];

    //         request.on('data', (chunk) => {
    //             body.push(chunk);
    //         });

    //         request.on('end', () => {
    //             body = Buffer.concat(body).toString();
    //             const { name } = JSON.parse(body);

    //             response.end(`<h1>Hai, ${name}!, This is page about</h1>`);
    //         });

    //     } else {
    //         // respons bila client tidak menggunakan GET ataupun POST
    //         response.end(`<h1>Page cannot access with ${method} request</h1>`);

    //     }

    // } else {
    //     // TODO 1: logika respons bila url bukan '/' atau '/about'
    //     response.end('<h1>Page is not found!</h1>');
    // }