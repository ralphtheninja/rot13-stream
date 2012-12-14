'use strict';

var through = require('through');

module.exports = function rot13Stream() {
  return through(function(data) {

    if (typeof data == 'string') {
      data = Buffer(data, 'utf8');
    }
    else if (!Buffer.isBuffer(data)) {
      throw new TypeError('Data must be a buffer or a string');
    }

    var result = new Buffer(data.length);
    for (var i = 0; i < data.length; ++i) {
      result[i] = rotateCharacter(data[i]);
    }
    this.emit('data', result);

  });
}

function rotateCharacter(c) {
  if (isLowerCase(c)) {
    return rotateLowerCase(c);
  }
  else if (isUpperCase(c)) {
    return rotateUpperCase(c);
  }
  return c;
}

function isLowerCase(c) {
  return (c >= smallA() && c <= smallZ());
}

function isUpperCase(c) {
  return (c >= capitalA() && c <= capitalZ());
}

function rotateLowerCase(c) {
  return rotateCharacterFrom(c, smallA());
}

function rotateUpperCase(c) {
  return rotateCharacterFrom(c, capitalA());
}

function smallA() {
  return "a".charCodeAt(0);
}

function capitalA() {
  return "A".charCodeAt(0);
}

function smallZ() { 
  return "z".charCodeAt(0);
}

function capitalZ() { 
  return "Z".charCodeAt(0);
}

function rotateCharacterFrom(c, base) {
  return (((c - base) + 13) % 26) + base;
}
