# NODEJS WEB SERVER

### A. basical use nodejs web server
1. Add this keyvalue in package.json

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
},
```

2. Example template NodeJS Web Server

```js
const http = require('http');
     
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    response.statusCode = 200;
    response.end('<h1>Hello World HTTP Server!</h1>');

    /*
        place for setup url or request and method
    */

};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server running in http://${host}:${port}`);
});
```

3. Use this command to run server:

```bash
npm run start
```

4. Server can use now with cmd like this,

```bash
curl -X GET http://localhost:5000
```

5. You can see output in website, write in search bar

```
http://localhost:5000
```

### B. Access route in curl 
```bash
curl -X GET http://localhost:5000/about
```

### C. Input data request client to nodejs server with curl
```bash
curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Dicoding\"}"
```

# ALL CURL COMMAND FLAG

```txt
-X , to use method in nodejs web server
-i , to see all status response web server client request
```