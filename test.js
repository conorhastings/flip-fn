const flip = require('./index.js');
const test = require('tape');

function  x(a, b) {
  return a - b;
}

var flipX = flip(x);

function y (a, b, c) {
  return a - b - c;
}

var flipY = flip(y);

test('returns result expected from first two arguments being flipped', assert => {
  assert.equal(x(2, 1), 1, 'unflipped function x call returns first - second');
  assert.equal(flipX(2, 1), -1, 'flipped function x call returns second - first');
  assert.equal(y(2, 1, 3), -2 , 'unflipped function y call returns first-second-third');
  assert.equal(flipY(2, 1, 3), -4, 'flipped function y call returns second-first-third, first 2 args flipped, rest left in tact');
  assert.end();
});