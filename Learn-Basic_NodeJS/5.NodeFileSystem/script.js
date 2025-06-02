const fs = require('fs');

const myfileCallBack = (error, mydata) => {
    if (error) {
        console.log('Failed to open file!');
        return;
    }
    console.log(mydata);
}

fs.readFile('./notes.txt', `UTF-8`, myfileCallBack); // versi asynchronous default

/* 

const myfile = fs.readFileSync('notes.txt', 'UTF-8'); // versi synchronous

console.log(myfile);
*/