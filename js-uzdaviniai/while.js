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
    b+= Math.floor(Math.random() * 100) + 1  ;
    
      
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
let m = 8; //skyriai
let d = 0; //dienos
let s = 0; // vidutiniskai kiek perskaito
let skyriaiPerDiena = 0;
while (d <= m) {
   
    skyriaiPerDiena = m / s;
    console.log(`${d}, ${skyriaiPerDiena}, ${s}`);
    d++ ;
    d = d + 1;  
    
    
}





