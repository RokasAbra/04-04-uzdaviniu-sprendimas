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

let myArray = [];
let arrayMax = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
let limit = arrayMax;
for (var i = 0; i < arrayMax; i++) {
  myArray.push(Math.floor(Math.random() * limit));
}
console.log(myArray, myArray.length);

/*
3.Sukurti atsitiktinio ilgio masyva, kurio ilgisnuo 10iki 15, o 
reikšmės –atsitiktiniai skaičiai nuo 5 iki 47.Surasti didžiausia skaičių masyve,
 nenaudojant sort ir Math.max funkcijų.
*/
console.log("=============3===========");

let mas = [];
let arrayMax1 = Math.floor(Math.random() * (15 - 10 + 1) + 10);
let limit1 = Math.floor(Math.random() * (47 - 5 + 1) + 5);
let largest = 0;
for (let i = 0; i <= arrayMax1; i++) {
  mas.push(Math.floor(Math.random() * limit1));
  if (mas[i] > largest) {
    largest = mas[i];
  }
}
console.log(mas, `Didziausia skaicius :`, largest);

/*
4.Sukurti masyvą, kurio ilgis 100, o reikšmės –raidės D, E, F, G, H. 20
*/
console.log("===========4============");
let string = ["D", "E", "F", "G", "H.", "20"];
let result = [];
let strin = 100;
for (let i = 0; i < strin; i++) {
  result.push(string[Math.floor(Math.random() * string.length)]);
}

console.log(result, result.length);

/*
5.Sukurti masyvą, kurio ilgis 100, 
o reikšmės –raidės M,N,O,P. Suskaičiuoti, kurios raidės buvo daugiausia.
*/

let words = ["M", "N", "O", "P"];
let test = [];
let mostm = 0;
let mostn = 0;
let mosto = 0;
let mostp = 0;
for (let i = 0; i < 100; i++) {
  test.push(words[Math.floor(Math.random() * words.length)]);
  if (test[i] === test[0]) {
    mostm++;
  }
  if (test[i] === test[1]) {
    mostn++;
  }
  if (test[i] === test[2]) {
    mosto++;
  }
  if (test[i] === test[3]) {
    mostp++;
  }
}
console.log(test, test.length, mostm, mostn, mosto, mostp);
