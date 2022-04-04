//1.Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.
let a = 18;
let b = 18;
const suma = (a, b) => a + b   
const rezultatas = suma(a, b);
console.log(rezultatas);

//2.Parašyti funkciją, kuri priima du kintamuosius.Palygina tuos du skaičius
// ir grąžina rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs
console.log('--------2----------');
function palyginimas(didesnis, lygus) {
    if (a > b) {
        return `Pirmas skaiciu yra didesnis`
    } else if (a < b) {
        return `Antras skacius yra didesnis`

        
    }else if (a = b) {
        return `Jie abu yra lygus`
    }
        
    }
 console.log(palyginimas(a, b));

 //3.Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.
console.log('--------3--------');
let metai = 1993;
function kokieMetai(keliamieji, neKeliamieji) {
    
    if (metai % 4 === 0 || metai % 400 ===0) {
        return `Pasirinkti metai ${metai} yra keliamieji`;
    } else return `Pasirinkti metai ${metai} yra ne keliamieji`;
        
    }
    console.log(kokieMetai());
    
//4.Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.
console.log('----------------');
let pirmas = 8;
const kvadratu = (pirmas) => pirmas * pirmas;
const rezultatas1 = kvadratu(pirmas);
console.log(rezultatas1);

//5.Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. 
//Funkcija turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.
console.log('--------------');
function skaiciuSuma(sk) {
    if (sk > 1) {
         let ats = 0;
        for (let i = 0; i <= sk; i++) {
            ats = ats + i;

            
        }return `Skaicius suma: ${ats} iki ivesto skaiciaus: ${sk}`
    }
}
 
 console.log(skaiciuSuma(3));

 //6.Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos argumentas
 // dalijasi be liekanos (išskyrus vienetą ir patį save).
 console.log('--------6--------');

 function sveikuSkaiciu(skc) {
     for (let i = 0; i < 1000; i++) {
        
         if (skc % i === 0) {
             
         }return `skaicius dalyjasi is ${skc}, ${sveikuSkaiciu.length}`
         
     }
     
 }console.log(sveikuSkaiciu());
