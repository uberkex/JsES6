
const langs = ["Python","Java","JavaScript"];

console.log(langs[0],langs[1],langs[2]);
// Output ---> Python Java JavaScript

/* Spread Operator */
console.log(...langs);
// Output ---> Python Java JavaScript


/* Eski yöntem -  array oluşturma */
const techs = ["PostgreSQL","Git","Linux",langs[0],langs[1],langs[2]];
console.log(techs);
// Output ---> (6) ["PostgreSQL", "Git", "Linux", "Python", "Java", "JavaScript"]

/* Spread ile array oluşturma */
const technologies = ["PostgreSQL","Git","Linux",...langs];
console.log(technologies);
// Output ---> (6) ["PostgreSQL", "Git", "Linux", "Python", "Java", "JavaScript"]





/* Destructing ile Spread Kullanma */
const numbers = [1,2,3,4,5,6,7,8,9];

const [a,b,...numbers2]= numbers;

console.log(a,b);
// Output ---> 1 2
console.log(numbers2);
// Output ---> (7) [3, 4, 5, 6, 7, 8, 9]





const addNumbers = (a,b,c) => console.log(a+b+c);

const nums = [100,200,300];

// Eski yöntem ile
addNumbers(nums[0],nums[1],nums[2]); 
// Output ---> 600

// Spread
addNumbers(...nums);
// Output ---> 600