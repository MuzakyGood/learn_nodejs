const http = require('http');
     
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    response.statusCode = 200;
    // response.end('<h1>Hello World HTTP Server!</h1>');

    const method = request.method;

    if(method === 'GET') {
        // response when GET
        response.end('<h1>Hello!</h1>');
    }
 
    if(method === 'POST') {
        // response when POST
        let body = [];

        request.on('data', (chuck) => {
            body.push(chuck);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);

            response.end(`<h1>Hai, ${name}!</h1>`);
        });
    }

    if(method === 'PUT') {
        // response when PUT
        response.end('<h1>Accepted!</h1>');
    }
 
    if(method === 'DELETE') {
        // response when DELETE
        response.end('<h1>Complete!</h1>');
    }

};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server running in http://${host}:${port}`);
});