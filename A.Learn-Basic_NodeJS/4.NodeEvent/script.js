const { EventEmitter } = require('events');

const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}!`);
}

const myEventEmitter = new EventEmitter();

myEventEmitter.on('setname', birthdayEventListener);

myEventEmitter.emit('setname', { name: 'Zach Noland' });