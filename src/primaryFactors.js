/*
Practise of primary factors calculation
*/

(function (exports) {
  exports.pfs = function (input) {
    let result = [];
    for (i = 2; i <= input; i++) {
      for (; input % i == 0; result.push(i)) {
        input /= i;
      }
    }
    return result;
  };
}((typeof window === 'undefined') ? module.exports : window));
