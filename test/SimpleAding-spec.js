/*
Challenge https://www.coderbyte.com/editor/guest:Simple%20Adding:JavaScript
Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. 
For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. 
For the test cases, the parameter num will be any number from 1 to 1000. 
Sample Test Cases
Input:12

Output:78


Input:140

Output:9870

*/

var chai = require('chai')

var expect = chai.expect
var assert = chai.assert

describe('Add up all the numbers from 1 to num', function () {
  var SimpleAdding;
  beforeEach(function () {
    SimpleAdding = require('../src/SimpleAdding.js').SimpleAdding;
  });
  it('is a function', function () {
    expect(SimpleAdding).to.be.an('function');
  });

});