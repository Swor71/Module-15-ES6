//Exercise 1

const hello = 'Hello';
const world = 'World';

console.log(`${hello} ${world}`);

//Exercise 2

let x, y;

const multiply = (x, y = 1) => { return x * y };

console.log(multiply(4));

//Exercise 3
const average = (...args) => {
    let sum = 0;
    args.forEach(arg => sum += arg);
    return sum / args.length};

console.log(average(1, 6, 6, 3));
console.log(average(1,3));

//Exercise 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//Exercise 5

const array = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , third, , fifth] = array;

console.log(third, fifth);



