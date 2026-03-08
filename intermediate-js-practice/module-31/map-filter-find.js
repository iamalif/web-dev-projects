const oddArray = [1, 3, 5, 7, 9];

// for (let i = 0; i < oddArray.length; i++) {
//     oddArray[i] = oddArray[i] + 1;
// }

// const evenArray = oddArray.map(num => num +1);

// console.log(oddArray)
// console.log(evenArray)

const sourceArray = [33, 50, 79, 78, 90, 101, 30];
const newFilteredArray = sourceArray.filter(num => num % 10 === 0);
const newFindArray = sourceArray.find(num => num % 10 === 0);
console.log(sourceArray);
console.log(newFilteredArray);
console.log(newFindArray);