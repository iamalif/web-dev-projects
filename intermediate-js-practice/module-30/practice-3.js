const numberProcessor = (array) => {
    let sum = 0;
    for (let i=0; i<array.length; i++) {
        array[i] = array[i] * array[i];
        sum = sum + array[i];
    }
    const average = sum / array.length;
    return average;
}

const array = [2, 3, 4];
console.log(numberProcessor(array));