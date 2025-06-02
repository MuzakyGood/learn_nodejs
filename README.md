# Learn Node JS

## Description

This is a Node.js project, built using Node.js – a powerful JavaScript runtime environment that runs on the server side. Node.js is ideal for building scalable, fast, and efficient network applications, especially APIs and real-time services.

## Features

- Server-side JavaScript with Node.js
- Non-blocking, asynchronous I/O
- Simple and lightweight architecture
- Easily extendable and maintainable
- Can integrate with databases, frontend frameworks, and third-party libraries

## Requirements

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Learning Path

1. [Basic Nodejs](https://github.com/MuzakyGood/learn_nodejs/Learn-Basic_NodeJS)

2. [Web Server With NodeJs](https://github.com/MuzakyGood/learn_nodejs/Learn-Basic-NodeJS_Web_Server)

3. [Using Hapi Framework](https://github.com/MuzakyGood/learn_nodejs/Learn-NojeJS_Hapi-Framework)

---

### All Project

1. [Notes App](https://github.com/MuzakyGood/learn_nodejs/PROJECT/Notes_App)

## Simple Web Server with nodejs

1. create file ``server.js``.

2. Write example structure code.

3. Run command to setup project.

```bash
npm init --y
```

4. Add this value-key in ``package.json``, like this;

```json
"scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "start": "node server.js"
}
```

5. Run Server with this command.

```bash
npm run start
```

6. By default, the application will run at:

   👉 ``http://localhost:5000``

   You can modify the host and port inside ``server.js``.

## Structure code template ``server.js``
```js
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
```

## Author

Created by [Zach Noland (@MuzakyGood)](https://github.com/MuzakyGood) in 2025