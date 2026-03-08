const array1 = [1,22,3];
const array2 = [4,5,6];

const maxNum = (array1, array2) => {
    const newArray = [...array1, ...array2];
    const max = Math.max(...newArray);
    return max;
}

console.log(maxNum(array1, array2));