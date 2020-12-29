const array = [1, 2, 3, 4, 5, 6, 7, 8];

const reducer = (accumulatro, currentValue) => accumulatro * currentValue;

console.log(array.reduce(reducer));

console.log(array.reduce(reducer, 5));

