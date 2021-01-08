
array1 = [100,200,300,400];
/* Klasik kullanım */
/* 
let number1, number2;
number1 = array1[0];
number2 = array1[1];

console.log(number1,number2);
// Output ---> 100 200 
*/


/* Destructing */
/* Array*/
/*
Değerlerimizi arraylerden oluşturmak istiyorsak Destructing kullanabiliriz.
number1,number2 sırasıyla array1'in 0 ve 1.indexine eşitleniyor
number3 eklersek onun değeri de sıradaki index olan 2.indexe eşitlenir yani 300'e
*/
const [number1,number2] = array1;
console.log(number1,number2);
// Output ---> 100 200





/* Object */
/*
Objelerin içinde sıraysıyla bakmadığı için undefined değeri dönüyor.
Objelerin anahtar key değerine bakarak alıyor
Değişken isimlerini vermeliyiz
*/
const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50,
};
/* undefined */
const {num1,num2,num3} = numbers;
console.log(num1,num2,num3);
// Output ---> undefined undefined undefined

/* key */
const {a,c,e} = numbers;
console.log(a,c,e);
// Output ---> 10 30 50

/* key:name */
const {b:numarab,c:numarac,d:numarad} = numbers;
console.log(numarab,numarac,numarad);
// Output ---> 20 30 40



/* Final Object */
const person = {
    name:"Berke Karataş",
    year:1997,
    salary:5000,
    showInfos: () => console.log("Bilgiler gösteriliyor.."),
}

const {name:isim, year:yil, salary:maas, showInfos:bilgileriGoster} = person;

console.log(isim,yil,maas);
// Output ---> Berke Karataş 1997 5000
bilgileriGoster();
// Output ---> Bilgiler gösteriliyor..





/* Function Destructing */
// Arrow function bize bir array dönüyor
const getLangs = () => ["Python","Java","JavaScript"];
const [lang1,lang2,lang3] = getLangs();
console.log(lang1,lang2,lang3);
// Output ---> Python Java JavaScript