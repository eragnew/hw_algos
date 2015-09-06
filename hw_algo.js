'use strict';

Array.prototype.newPush = function(item) {
  this[this.length] = item;
};

Array.prototype.newPop = function() {
  var item = this[this.length - 1];
  delete this[this.length - 1];
  this.length = this.length - 1;
  return item;
};

Array.prototype.newShift = function() {
  var item = this[0], len = this.length;
  delete this[0];
  for (var i = 0; i < len; i++) {
    this[i] = this[i + 1];
  }
  this.length = len - 1;
  return item;
}

Array.prototype.newUnshift = function(item) {
  for (var i = this.length - 1; i >= 0; i--) {
    this[i + 1] = this[i];
  }
  this[0] = item;
}

exports.unique = function(array) {
  var checked = {}, uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!checked[array[i]]) {
      uniqueArray.push(array[i]);
      checked[array[i]] = true;
    }
  }
  return uniqueArray;
}

exports.frequency2 = function(array) {
  var letters = 'abcdefghijklmnopqrstuvwxyz'.split(''), letterCount = {};
  var max = 0, maxLetter;
  // initialize a letter dictionary with zeroes
  for (var i = 0; i < letters.length; i++) {
    letterCount[letters[i]] = 0;
  }
  // loop for word array and increment letter dictionary count for each letter
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      letterCount[array[i][j]]++;
    }
  }
  // get the letter with the highest count
  for (var letter in letterCount) {
    if (letterCount[letter] > max) {
      max = letterCount[letter];
      maxLetter = letter;
    }
  }
  return maxLetter;
}

