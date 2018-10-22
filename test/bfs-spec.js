var chai = require('chai')

// chai.should()
var expect = chai.expect
var assert = chai.assert

describe('bfs', function () {
  var bfs;
  beforeEach(function () {
    bfs = require('../src/bfs').bfs;
    
  });
  it('is a function', function () {
    expect(bfs).to.be.an('function');
  });
  it('return [0] with input [[1]] , 0, 0', function () {
    expect(bfs([[1]], 0, 0)).to.deep.equal([0])
  });
  it('return [0,1] with input [[0,1],[1,0]] , 0, 1', function () {
    expect(bfs([[0, 1], [1, 0]], 0, 1)).to.deep.equal([0, 1])
  });
  it('return [] with input [[0,0],[0,0]] , 0, 1', function () {
    expect(bfs([[0, 0], [0, 0]], 0, 1)).to.deep.equal([])
  });
  it('return [0,2] with input [[0,0,1],[0,0,1],[0,0,1]] , 0, 2', function () {
    expect(bfs([[0, 0, 1], [0, 0, 1], [0, 0, 1]], 0, 2)).to.deep.equal([0, 2])
  });

  it('[[0,0,1],[0,0,1],[0,0,1]], 0, 2  returns [0,2]', function () {
    expect(bfs([[0, 1, 1], [0, 0, 1], [0, 0, 1]], 0, 2)).to.deep.equal([0, 2])
  });

  it('[[0,0,1],[0,0,1],[0,0,1]], 0, 2  returns [0,2]', function () {
    expect(bfs([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 2, 0)).to.deep.equal([2, 0])
  });

  it('[[0,1,0],[0,0,1],[0,0,1]], 0, 2  returns [0,1,2]', function () {
    expect(bfs([[0, 1, 0], [0, 0, 1], [0, 0, 1]], 0, 2)).to.deep.equal([0, 1, 2])
  });

  var graph = [[1, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0]];

  it('sanity test, 1, 5  returns [1,2,3,5]', function () {
    expect([1,2,3,5]).to.deep.equal(bfs(graph,1,5))
  });

});
