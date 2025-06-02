const http = require('http');
     
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    response.statusCode = 200;
    response.end('<h1>Hello World HTTP Server!</h1>');

    /*
        Place to config url or request and method.
    */

};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server running in http://${host}:${port}`);
});