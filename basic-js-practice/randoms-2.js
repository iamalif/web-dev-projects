// task 1
// const heights2 = [167, 190, 120, 165, 137, 5];
// let lowestNum = heights2[0];
// for(const height of heights2){
//     if(height<lowestNum){
//         lowestNum = height;
//     }
// }
// console.log(lowestNum);


// task 2
// const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'a'];
// let smallestName = names[0];
// for(const name of names){
//     if(name.length < smallestName.length){
//         smallestName = name;
//     }
// }
// console.log(smallestName);


// task 3
// function calculateElectronicsBudget(lap, tab, mob) {
//     const lapPrice = 35000;
//     const tabPrice = 15000;
//     const mobPrice = 20000;

//     const totalPrice = (lapPrice * lap) + (tabPrice * tab) + (mobPrice * mob);

//     return totalPrice;
// }

// console.log(calculateElectronicsBudget(1, 1, 1));


// task 4
// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// function findAveragePhonePrice(arr){
//     let counter = 0;
//     let totalPrice = 0;
//     for(const phone of arr){
//         totalPrice = totalPrice + phone.price;
//         counter++;
//     }
//     const averagePrice = totalPrice / counter;
//     return averagePrice;
// }

// console.log(findAveragePhonePrice(phones));


// task 5
// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];

// function totalSalary(arr) {
//     let grandTotal = 0;
//     for (const employee of arr) {
//         const startingSalary = employee.starting;
//         const incrementedSalary = employee.experience * employee.increment;
//         const fullSalary = startingSalary + incrementedSalary;
//         grandTotal = grandTotal + fullSalary;
//     }
//     return grandTotal;
// }

// console.log(totalSalary(employees));