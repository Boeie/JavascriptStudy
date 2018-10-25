/*
Practise of primary factors calculation
*/

(function (exports) {

  exports.pfs = function (input) {
    let result = [];

    for (let candidate = 2; candidate <= input; candidate++) {
      for (; input % candidate == 0; input /= candidate) {
        result.push(candidate);
      }
    }
    return result;
  };
}((typeof window === 'undefined') ? module.exports : window));
