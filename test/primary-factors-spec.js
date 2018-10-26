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
  it('return [3] with input 3 ', function () {
    expect(pfs(3)).to.deep.equal([3])
  });
  it('return [2,2] with input 4 ', function () {
    expect(pfs(4)).to.deep.equal([2,2])
  });
  it('return [2,3] with input 6 ', function () {
    expect(pfs(6)).to.deep.equal([2,3])
  });
  it('return [3,3] with input 9 ', function () {
    expect(pfs(9)).to.deep.equal([3,3])
  });
  it('return [2,2,2] with input 8 ', function () {
    expect(pfs(8)).to.deep.equal([2,2,2])
  });
  it('return [2,5] with input 10 ', function () {
    expect(pfs(10)).to.deep.equal([2,5])
  });
  it('return [5,5] with input 25 ', function () {
    expect(pfs(25)).to.deep.equal([5,5])
  });
  it('return [2,2,5,17,17,109] with input 2*2*5*17*17*109 ', function () {
    expect(pfs(2*2*5*17*17*109)).to.deep.equal([2,2,5,17,17,109])
  });
});