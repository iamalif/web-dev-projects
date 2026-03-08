// task 1
// function celciusToFahrenheit(celcius) {
//     const fahrenheit = (celcius * (9 / 5) + 32);
//     return fahrenheit;
// }
// console.log(celciusToFahrenheit(9));


// task 2
// function howMany(array, search){
//     let counter = 0;
//     for(const num of array){
//         if(search===num){
//             counter++;
//         }
//     }
//     return counter;
// }

// const numbers = [5, 6, 11, 12, 98, 5, 5];
// const find = 5;
// console.log(howMany(numbers, find))


// task 3
// function vowelCounter(str){
//     let counter = 0;
//     for(let i = 0; i<str.length; i++){
//         if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
//             counter++;
//         }
//     }
//     return counter;
// }

// const vowelCount = vowelCounter('aeioullla');
// console.log(vowelCount);


// task 4
// function longestWord(str){
//     const strToArray = str.split(' ');
//     let result = '';
//     for(const word of strToArray){
//         if(word.length >= result.length){
//             result = word;
//         }
//     }
//     return result;
// }

// console.log(longestWord('I am learning Programming to become a programmer asdfghjklpoiuyqwertzmnxcbv'));


// task 5
// function randomNumber() {
//     return (Math.random() * 10) + 10;
// }

// console.log(randomNumber())