// #1
const multiply = (x, y, z) => x * y * z;
console.log(multiply(2,3,4));


// #2
const templateString = `
    I am a web developer.
    I love to code.
    I love biriyani too.
`;

console.log(templateString);


// #3
const add = (num1, num2 = 0) => num1 + num2;
console.log(add(2,3));
console.log(add(2));
