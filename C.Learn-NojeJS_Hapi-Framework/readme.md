# Hapi Web Server Framework

### A. Setup Hapi
1. Setup project with npm

```bash
npm init --y
```

2. after that edit ``package.json`` like this

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
},
```

3. First install package with npm

```bash
npm install @@hapi/hapi
```

4. write this code in your javascript

```js
const Hapi = require("@hapi/hapi");

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
 
    await server.start();
    console.log(`Server running in ${server.info.uri}`);
}

init();
```

5. Run that code with this command npm

```bash
npm run start 
```