'use strict';

var expect = require('chai').expect;
var hw = require('../hw_algo');

describe('arrays', function() {
  it('should reimplement push', function() {
    var a1 = [0, 1, 2, 3], a2 = [0, 1, 2, 3, 4];
    a1.newPush(4);

    expect(a1).to.deep.equal(a2);
    expect(a1).to.have.length(5);
  });
  it('should reimplement pop', function() {
    var a1 = [0, 1, 2, 3], a2 = [0, 1, 2], checkItem = 3;
    var item = a1.newPop();

    expect(a1).to.deep.equal(a2);
    expect(a1).to.have.length(3);
    expect(item).to.equal(checkItem);
  });
  it('should reimplement shift', function() {
    var a1 = [0, 1, 2, 3], a2 = [1, 2, 3], checkItem = 0;
    var item = a1.newShift();

    expect(a1).to.eql(a2);
    expect(a1).to.have.length(3);
    expect(item).to.equal(checkItem);
  });
  it('should reimplement unshift', function() {
    var a1 = [0, 1, 2, 3], a2 = [10, 0, 1, 2, 3];
    a1.newUnshift(10);

    expect(a1).to.eql(a2);
    expect(a1).to.have.length(5);
  });
});

describe('unique', function() {
  it('should return an array with only unique elements', function() {
    var a1 = [0, 0, 1, 2, 3, 3, 4, 5, 5, 5], a2 = [0, 1, 2, 3, 4, 5];
    var result = hw.unique(a1);

    expect(result).to.eql(a2);
  });
});

describe('frequency2', function() {
  it('should return the most common letter in an array of words', function() {
    var a = ['cat', 'cow', 'chip', 'back', 'hiccup'];
    var mostCommonLetter = hw.frequency2(a);

    expect(mostCommonLetter).to.equal('c');
  });
});




