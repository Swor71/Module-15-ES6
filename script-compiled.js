'use strict';

//Exercise 1

var hello = 'Hello';
var world = 'World';

console.log(hello + ' ' + world);

//Exercise 2

var x = void 0,
    y = void 0;

var multiply = function multiply(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return x * y;
};

console.log(multiply(4));

//Exercise 3
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var sum = 0;
    args.forEach(function (arg) {
        return sum += arg;
    });
    return sum / args.length;
};

console.log(average(1, 6, 6, 3));
console.log(average(1, 3));

//Exercise 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

//Exercise 5

var array = [1, 4, 'Iwona', false, 'Nowak'];
var third = array[2],
    fifth = array[4];


console.log(third, fifth);
