/* Eski Yöntem */
/* const merhaba = function(){
    console.log("Merhaba");
}

merhaba();
// Output ---> Merhaba */


/* Arrow Function */
const merhaba = () => {
    console.log("Merhaba");
}

merhaba();
// Output ---> Merhaba */




const infos = (firstName,lastName) => {
    console.log(`Ad Soyad = ${firstName} ${lastName}`);
}
infos("Berke","Karataş");
// Output ---> Ad Soyad = Berke Karataş



/* Tek parametreli Arrow Function */
const myname = firstName => {
    console.log(`Merhaba ${firstName}`);
}
myname("Berke");
// Output ---> Merhaba Berke


/* Tek satır: Tek işlemli Arrow Function */
const mylastname = lastName => console.log(`Merhaba ${lastName}`);
mylastname("Karataş");
// Output ---> Merhaba Karataş

const fullname = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`);
fullname("Berke","Karataş");
// Output ---> Merhaba Berke Karataş



/* Returnlü Fonksiyonları Arrow Func olarak yazma */
/* Eski Yöntem */
/* 
const cube = function(x){
    return x*x*x;
}
console.log(cube(3));
// Output --->  27 
*/

/* Yeni Yöntem */
const cube = x => x * x * x;
console.log(cube(3));
// Output --->  27