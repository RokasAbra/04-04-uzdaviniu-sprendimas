console.log("=================1================");

/*
1.Sukurti masyą, kurio ilgis 20, o reikšmės –skaičiai, nuo 1 iki 20
*/

const masyvas = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

console.log(masyvas.length);

/*
2.Sukurti atsitiktinio ilgio masyvą, nuo 40 iki 60, 
kurio reikšmės būtų skaičiai nuo 1 iki masyvo ilgio.
*/
console.log("============2=============");

var myArray = [];
var arrayMax = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
var limit = arrayMax;
for (var i = 0; i < arrayMax; i++) {
  myArray.push(Math.floor(Math.random() * limit));
}
console.log(myArray, myArray.length);
