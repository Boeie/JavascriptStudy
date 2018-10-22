var chai = require('chai')

var expect = chai.expect
var assert = chai.assert

describe('primary factors tdd kata', function () {
  var pfs;
  beforeEach(function () {
    pfs = require('../src/primaryFactors').pfs;
  });
  it('is a function', function () {
    expect(pfs).to.be.an('function');
  });
  it('return [] with input 1 ', function () {
    expect(pfs(1)).to.deep.equal([])
  });
  it('return [2] with input 2 ', function () {
    expect(pfs(2)).to.deep.equal([2])
  });


});