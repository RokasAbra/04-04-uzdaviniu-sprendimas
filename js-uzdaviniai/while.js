/*
1.Generuoti atsitiktinius skaičius nuo 1 iki 10tol, kolskaičių suma bus mažesnė už 100.
*/ 


let a = 0;
let suma1 = 0;
while (a < 100){
    
    console.log(a);
    a += Math.floor(Math.random() * 10) + 1; 
    
}


//2.Generuoti atsitiktinius skaičius nuo 1 iki 10tol, kol sugeneruotųskaičių sumabus daliiš 7.
console.log('====================2===========');
let b = 0;
let sumaWhile = 0;
while ( sumaWhile % 7 === 0  ) {
     
     sumaWhile += b
    console.log(b);
    b+= Math.floor(Math.random() * 10) + 1  ;
    
      
}

/*
3.Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. Knygoje yra m skyrių.
 Pirmą dieną Tadasperskaitė 1 skyrių, antrą –2, trečią –3 ir t.t. Kiekvieną kitą dieną jis perskaito vienu 
 skyriumi daugiau, negu prieš tai buvusią dieną. Programa turi apskaičiuoti, per kelias dienas d Tadas perskaitys
  visą knygą ir kelis skyrius s vidutiniškai per dieną perskaito Tadas. Paskutinei dienai gali likti mažiau skyrių.
  Kontroliniai duomenys:Įveskite knygos skyrių skaičių: 8Tadas visą knygą perskaitys per 4 dienas (-ų).Tadas
   vidutiniškai per dieną perskaitė 2 skyrius(-ų).Įveskite knygos skyrių skaičių: 17Tadas visą knygą perskaitys 
   per 6 dienas (-ų).Tadas vidutiniškai per dieną perskaitė 2.83 skyrius (-ų).
*/
// Pirmą dieną Tadasperskaitė 1 skyrių, antrą –2, trečią –3 ir t.t.
 //skyriai var1: 8 skyriai
//per kiek dienu : 4 dienos 
 // kiek vidutiniskai skyriu perskaito per diena : 2skyriai
// visa knyga perskaitys per 6 dienas
// knygos skyriai : 17
// Tadas vidutiniskai per diena perskaite 2.83 skyrius
console.log('================3============');
 // m = skyriai 
 // d = dienos
 // s = vidutiniskai kiek perskaito
 // kiek per diena
let m = 8;
let d = 0; ///Day1= 1s day2= 2, day3= 3 day=...
let s=  0;
let skyriai = 0;
let perskaityta = 0;
let perdiena = 0;
while (perskaityta !== 8 && d <= m) {
    
    d++;
     perskaityta = d += 1;
     console.log(`perskaytita:${perskaityta} dienos:, ${d}, perdiena, ${perdiena}  ${skyriai}`);
    
    
}
console.log('-----------3-----------');


/*
  4.Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
  (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5.
*/
let number = 0;
while (number !==5) {
    number= Math.floor(Math.random() * 10) + 1;
    console.log(number);
     
}

/*
5.naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 
(vienas skaičius vienoje eilutėje). 
Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko.
*/

let x = 0;
let y = 0;
while (x !== 5 && x !== 7) {
    x = Math.floor(Math.random() * 10) + 1;
    y++;
    console.log(`${x}, ${y}`);
    
}console.log(`Ciklu prasisuko : ${y} `);