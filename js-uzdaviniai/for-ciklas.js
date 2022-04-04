//1.Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.

const zodis=['Labas', 'Labas', 'Labas', 'Labas', 'Labas',];
console.log(zodis[0]);
console.log(zodis[1]);
console.log(zodis[2]);
console.log(zodis[3]);
console.log(zodis[4]);

console.log('----------');
for (let i = 0; i < 5; i++) {
    console.log('Labas');

}
//2.Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje).

console.log('---------2-------------');

let skaicius = 0;
for (let i = 0; i < 5 ; i++) {
    console.log(i);
}

//3.Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje).
console.log('---------3--------');
let a = 0;
for (let i = 0; i <= 40; i +=10) {
    
    console.log(i);
}

//4.Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje).
console.log('---------4-------');

let b = 0;
for (let i = 49; i <= 53; i +=1 ) {
    console.log(i);
    
}

//5.Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
console.log('--------5--------');
let c = 0;
let min= 0;
let max = 10;
for (let i = 0; i < 5; i++) {
   
    c = Math.floor(Math.random()*(max-min+1)+min);
         console.log(c);
} 

console.log('--------5-2---------');
function rand(min, max){return Math.floor(Math.random()*(max-min+1)+min);}
for (let i = 0; i < 5; i++) {
     console.log(rand(0,10));
 }


//6.Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.
console.log('------------6---------');

let i = 0 ;
for (let i = 0; i < 20; i++) {
    
    if (i % 3 == 0) {
        console.log(i); ///visi kurie dalinasi is 3
    }
}
console.log('-----------------');
let q = 0 ;
for (let i = 0; i < 20; i++) {
    
    if (i % 3 !== 0) {
        console.log(i); ///visi kurie nesidalina is 3
    }
}


//7.Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.
console.log('----------7----------');
let ivestasSkaicius = 3
let nr = 0;
for (let i = 0; i <= 10; i++) {
    console.log(ivestasSkaicius, 'x', i, '=', i * ivestasSkaicius  );
    
}

//8.Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekranelentelę nuo 1 iki n colius centimetrais.
console.log('---------8----------');
let colis = 2.54;
let cm = 0;
for (let i = 0; i < 20; i++) {
    const cm = [i] * colis;
    console.log(`Pateiktas skaicius: ${i} cm = ${cm} coliu `);
    
}

//9.Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.
console.log('--------9--------');
 
const palūkanuNorma = 2;
const metai = 10;
let indelis = 100;

for (let i = 2010; i <= 2022; i++) {
    const palūkanos = (Math.round(indelis * palūkanuNorma)) / 100;
    indelis += palūkanos;
    console.log(` ${i} metais indelis bus ${indelis.toFixed(1)}, o palukanos bus ${palūkanos}.`);
}

/*10.Keliamieji metai turi 366 dienas, paprastieji–365. Visi metai, išskyrus 
šimtmečius, yra keliamieji, jie dalūs iš 4. Šimtmečių metai yra keliamieji, 
jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 –
paprastieji. Raskite visus mūsų eros keliamuosius metus.*/

 console.log('----10---------');

 
  
     for (let i = 0; i <= 2022; i++) {
         if ((i % 4 === 0 || i % 400 === 0)) {
             console.log(`Metai ${i} yra keliamieji`);
         }// else if ((i % 4 !=  0 || i % 400 != 0)) {
           //  console.log(`Metai ${i} yra ne keliamieji`);
         //}
            
         
        }      
     
     
 



 
 