# REST API (Bookshelf)

## 📄Setup Project

1. Install repository

```bash
git clone https://github.com/MuzakyGood/learn_nodejs.git
```

2. Copy repository Bookshelf REST API

```bash
mv learn_nodejs/PROJECT/Bookshelf_API Your_Repository/Bookshelf_API
```

3. Setup your project, open project with text editor.
4. In Terminal/CMD install packages nodejs.

```bash
npm install
npm run build
npm run start
```

5. Open website in browser with local url or with **cURL**.

```bash
http://localhost:9000
```

## 📁Structure Code

```bash
Bookshelf_API
├── node_modules
├── src
│ ├── handler.js
│ ├── books.js
│ ├── routes.js
│ └── server.js
├── .eslintrc.json
├── package-lock.json
└── package.json
```

## 📦Package NodeJS

| No   | Packages    | Explain |
| :--: |:----------  | :------ |
| 1    | @eslint/js  | A plugin for ESLint that provides rules and configurations specifically for JavaScript. |
| 2    | nanoid      | A lightweight, secure, and URL-friendly unique ID generator for JavaScript.             |
| 3    | @hapi/hapi  | A powerful and secure HTTP server framework for building web applications and APIs.     |