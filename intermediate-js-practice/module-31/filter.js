const instructors = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'}
];

const seniors = instructors.filter(instructor => instructor.position === 'Senior');
const juniors = instructors.filter(instructor => instructor.position === 'Junior');

console.log(instructors);
console.log(seniors);
console.log(juniors);