/*
Challenge
Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed 
and return the largest word in the string. If there are two or more words that are the same length, 
return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 

*/

var chai = require('chai')

var expect = chai.expect
var assert = chai.assert

describe('Return longest word in the given sentence', function () {
  var LongestWord;
  beforeEach(function () {
    LongestWord = require('../src/longestWord.js').LongestWord;
  });
  it('is a function', function () {
    expect(LongestWord).to.be.an('function');
  });
  it('return time with input \'fun&!! time\' ', function () {
    expect(LongestWord('fun&!! time')).to.deep.equal('time')
  });
  it('return love with input \'I love dogs\' ', function () {
    expect(LongestWord('I love dogs')).to.deep.equal('love')
  });


});