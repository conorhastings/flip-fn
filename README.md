# flip 

Takes function as argument and returns a new function that will call original function with first two arguments flipped. Higher order functions like this can be seen in languages like `Elm` and `Haskell`

## use

```js
function  x(a, b) {
  return a - b;
}

var flipX = flip(x);

x(2, 1) //returns 1
flipX(2, 1) //returns -1
```