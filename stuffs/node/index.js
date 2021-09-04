const logEvents = require('./logEvents')
const eventEmitter = require('events')
const { EventEmitter } = require('stream')

class MyEmitter extends EventEmitter {};

const myEmitter  = new MyEmitter;

myEmitter.on('log', (msg) => logEvents(msg));

myEmitter.emit('log', 'This is an event log\t')