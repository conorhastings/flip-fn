module.exports = function flip(fn) {
  return function () {
    var args =  Array.prototype.slice.call(arguments, 2);
    args.unshift(arguments[0]);
    args.unshift(arguments[1]);
    return fn.apply(null, args);
  }
}
