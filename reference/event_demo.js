const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter{}

//init object
const myEmitter = new MyEmitter();

//Event listened
myEmitter.on('event', () => console.log('Event Fired!'));

//init event
myEmitter.emit('event');