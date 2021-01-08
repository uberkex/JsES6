const person = {
    name: "Berke Karataş",
    age: 23,
    salary:5000,
}

const langs = ["Python","Java","JavaScript"];

const name = "Berke";

/* FOR IN  */
/*
index numaralarını verir, değerini alabiliriz
*/

/* OBJECT */
/* 1 */
for (let prop in person){
    console.log(`${prop}`);
}
/* Output --->
name
age
salary
*/

/* 2 */
for (let prop in person){
    console.log(`${prop} = ${person[prop]}`);
}
/* Output --->
name    = Berke Karataş
age = 23
salary = 5000
*/





/* ARRAY */
for (let i in langs){
    console.log(`${i} ---> ${langs[i]}`);
}
/* Output --->
0 ---> Python
1 ---> Java
2 ---> JavaScript
*/





/* STRING */
for(let i in name){
    console.log(i,name[i]);
}
/* Output --->
0 B
1 e
2 r
3 k
4 e
*/





/* FOR OF */
/*
değerlerini verir
Objelerde çalışmaz hata verir --> Uncaught TypeError: person is not iterable
 */

 /* Object (HATA) */
 /*
 for (let value of person){
     console.log(value);
 }
 // Output ---> Uncaught TypeError: person is not iterable
 */





 /* ARRAY */
  for (let value of langs){
     console.log(value);
 }
 /* Output --->
 Python
 Java
 JavaScript
 */





 /* STRING */
 for (let char of name){
     console.log(char);
 }
 /* Output --->
 B
 e
 r
 k
 e
 */