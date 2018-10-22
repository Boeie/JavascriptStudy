(function (exports) {

  exports.bfs = function (graph, start, end) {
    var parents = [];
    var queue = []
    var visited = [];
    queue.push(start)
    visited[start] = true;
    parents[start] = null;

    const buildPath = function(current){
      var result = [current];
      var next = parents[current];
      while(next !== null){
        result.push(next);
        next = parents[next];
      }

      return result.reverse();
    }

    while(queue.length > 0) {
      var current = queue.shift();
      if (end === current) {
        return buildPath(current);
      }
      for(var i = 0; i <  graph[current].length  ; i += 1){
        if(!visited[i] && graph[current][i] > 0 && i!=current){
          visited[i] = true;
          parents[i] = current;
          queue.push(i);
        }
      }

    }
    return [];
  };
}((typeof window === 'undefined') ? module.exports : window));
