/*
1.Generuoti atsitiktinius skaičius nuo 1 iki 10tol, kolskaičių suma bus mažesnė už 100.
*/

let a = Math.floor(Math.random() * 10) + 1;
let sum = 0;
while (sum < 100) {
  sum += a;
}
console.log(sum);

console.log("==============2=========");

//2.Generuoti atsitiktinius skaičius nuo 1 iki 10tol, kol sugeneruotųskaičių sumabus daliiš 7.

let b = 0;
let sum1 = 0;
while (sum1 % 7 === 0) {
  sum1 = b += Math.floor(Math.random() * 10) + 1;
}
console.log(b);

//3. Tadas ir knyga
console.log("=================3============");
let m = 17;
let d = 0;
let s = 0;

while (s < m) {
  d++;
  s += d;
}
let vid = m / d;
console.log(
  `Tadas per diena vidutiniskai perskaiti : ${vid} skyriu ir knyga perskaitys pers ${d}`
);

console.log("================4=================");
/*
  4.Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
  (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5.
*/

let c = 0;
while (!(c === 5)) {
  c = Math.floor(Math.random() * 11);
}
console.log(c);

console.log("===============5===============");

/*
5.naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
(vienas skaičius vienoje eilutėje). 
Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko.
*/

let x = 0;
let y = 0;
while (!(x === 5 && x === 7)) {
  x = Math.floor(Math.random() * 11);
  y++;
}
console.log(x, `ciklu prasisuko: ${y}`);
