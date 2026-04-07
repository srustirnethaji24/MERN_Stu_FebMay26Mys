// This file creates and exports a custom EventEmitter instance
const EventEmitter = require ("events");

// Custom EventEmitter Object
const bookingEmitter = new EventEmitter();

module.exports = bookingEmitter;