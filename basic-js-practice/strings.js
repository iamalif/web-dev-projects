// task 1
// const letters = 'adaaaa';
// let counter = 0;
// for(let i = 0; i<letters.length; i++){
//     if(letters[i]==='a'){
//         counter++;
//     }
// }
// console.log(counter);


// task 2
// const letters = 'adaAaa';
// let counter = 0;
// for(let i = 0; i<letters.length; i++){
//     if(letters[i]==='a' || letters[i]==='A'){
//         counter++;
//     }
// }
// console.log(counter);


// task 3
// const letters = 'aeiou';
// for(let i = 0; i<letters.length; i++){
//     if(letters[i]==='a'){
//         if(letters[i]==='e'){
//             if(letters[i]==='i'){
//                 if(letters[i]==='o'){
//                     if(letters[i]==='u'){
//                         continue;
//                     }
//                     continue;
//                 }
//                 continue;
//             }
//             continue;
//         }
//         continue;
//     }
// }

// let str = "education";
// str = str.toLowerCase();

// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let allVowelsPresent = vowels.every(vowel => str.includes(vowel));

// console.log(allVowelsPresent);


// task 4
// let str = 'Xoo';
// for(let i = 0; i<str.length; i++){
//     if(str[i]==='x'){
//         str = str.replace('x','X');
//     }
//     else if(str[i]==='X'){
//         str = str.replace('X','x');
//     }
// }
// console.log(str);


// task 5
// let finalSentence = [];
// const words = 'This is a sentence.';
// let splitWords = words.split(' ');
// for(let i = 0; i<splitWords.length; i++){
//     const word = splitWords[i];
//     const firstLetter = word.charAt(0);
//     const firstLetterCap = firstLetter.toUpperCase();
//     const remainingLetters = word.slice(1);
//     const capitalizedWord = firstLetterCap + remainingLetters;
//     finalSentence.push(capitalizedWord);
// }
// console.log(finalSentence);