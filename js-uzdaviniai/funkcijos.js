//1.Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.
console.log('------1---------');
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
    }if (a < b) {
        return `Antras skacius yra didesnis`

        
    }if (a = b) {
        return `Jie abu yra lygus`
    }
        
    }
 console.log(palyginimas(a, b));

 //3.Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.
console.log('--------3--------');
let metai = 1600;
function kokieMetai(keliamieji, neKeliamieji) {
    
    if ((metai % 4 === 0 && metai % 100 !== 0) || metai % 400 === 0) {
        return `Pasirinkti metai ${metai} yra keliamieji`;
    } else return `Pasirinkti metai ${metai} yra ne keliamieji`;
        
    }
    console.log(kokieMetai());
    
//4.Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.
console.log('--------4--------');
let pirmas = 8;
const kvadratu = (pirmas) => pirmas * pirmas;
const rezultatas1 = kvadratu(pirmas);
console.log(`Pasirinktas skaicius kvadratu = ${rezultatas1}`);

//5.Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. 
//Funkcija turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.
console.log('-------5-------');
function skaiciuSuma(sk) {
  if (sk <= 0) {
    return 'ERROR ====> Number cant be equal or negative'
  }
  let total = 0;
  for (let i = 0; i < sk; i++) {
       total += i;
      
  }return `Numbers sum: ${total} `
    
}console.log(skaiciuSuma(3));

const numSum = (n) => n * (n+1) / 2;
console.log(`Skaiciu suma: ${numSum(3)}`);

  
  
  
  

 //6.Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos argumentas
 // dalijasi be liekanos (išskyrus vienetą ir patį save).
 console.log('--------6--------');
 console.log('-------------');

 function sveikiSk(skaicius) {
     if (typeof skaicius !== 'number'
     || !isFinite(skaicius) ) {
         return `ERROR` }
         let dalmuo = 0;
         for (let i = 2; i < skaicius; i++) {
             if (skaicius % i === 0) {
                 dalmuo++;
             }  
         }return `skaiciaus dalijasi is: ${dalmuo} sveiku`;
     }
      
 console.log(sveikiSk(6));
 console.log(sveikiSk(true));
 console.log(sveikiSk(3.14));


 /* function findProperDivisor(num) {
    if(num<0) return
      let sum = 0;
      for (let i = 0; i < Math.floor(num / 2); i++) {
        if (num % i === 0) {
          sum += i;
    console.log(sum);
        }
      }
      return sum
    }console.log(findProperDivisor(18));*/

    //7.Parašyti funkciją, kuri priimtų vieną kintamąjį-tekstą. 
    //Funkcija turi išvesti tekstą į ekraną ir dar papildomai parodyti jo 
    //ilgį(simbolių kiekį).
console.log('===========7=========');
    function text( raides ) {
        if (typeof raides !== 'string' ) {
            return `ERROR====> Teksta yra netinkamo tipo`
        }
        if (raides === '') {
            return `ERROR====> Tekstas negali buti tuscias`
        }
        let raidziuIlgis = raides.length
        return  `Tekstas ${raides} sudarytas is: ${raidziuIlgis} simboliu` 
    }
console.log(text('asdasd'),);
console.log(text(1, 2, 3),);
console.log(text(''),);
   
   //8.Parašyti funkcijątelefonoNumeris, kuri priima vieną kintamąjį–masyvą su 10 skaičių jame.
   //Funkcija turi grąžinti telefono numerį tokiu formatu -"(XXX) XXX-XXXX".
   console.log('=================8==============');
   function funkcijątelefonoNumeris(nr) {
       if (typeof nr !== 'object') {
           return 'ERROR===> Not a number'
       }
       if (nr.length === 0) {
           return 'ERROR: List cant be empty'
       }
       for (let i = 0; i <= nr.length; i++) {
          if (nr.length == 10 ) {
              return (`(${nr[0]} ${nr[1]} ${nr[2]}) ${nr[3]} ${nr[4]} ${nr[5]} - ${nr[6]} ${nr[7]} ${nr[8]} ${nr[9]}`);
          }
          if (nr.length < 10 ) {
              return 'ERROR===> Not enough numbers, numbers format: '
          }
           
       }console.log(nr.length);
   }

console.log(funkcijątelefonoNumeris([8, 5, 6, 8, 9, 7, 8, 9, 3, 1]), '==>', '"(xxx) xxx-xxxx"');
console.log(funkcijątelefonoNumeris([8, 5, 6, 8, 8, 9, 3, 1]), '==>', '"(xxx) xxx-xxxx"');

//9.Parašyti funkciją, kuri priimtų du kintamuosius-tekstus.Palyginti kuris tekstas yra ilgesnis.

console.log('==============9===========');
function duKintamieji(pirmas, antras) {
   
    if (pirmas.length > antras.length) {
        return `Pirmas zodis yra is: ${pirmas.length} raidziu ir didesnis uz antra kurio dydis: ${antras.length}`
    }
    if (antras.length > pirmas.length) {
        return `Antras zodis yra is: ${antras.length} raidziu ir didesnis uz pirma kurio dydis: ${pirmas.length}`
    }
    if (pirmas.length >= antras.length) {
        return `Jie abu yra lygus`
    }
}

console.log(duKintamieji('pirmasis', 'antras'));

//10.Parašyti funkciją, kuri priimtų vieną kintamąjį-tekstą.Suskaičiuoti, kiek tekste yra ‚a‘ raidžių.
console.log('////////////////10\\\\\\\\\\\\\\\\\\\\\\\\\\');

function kintamasisA(tekstas){
    let raidziuSuma = 0;
    for (let i = 0; i <= tekstas.length; i++) {
        if (tekstas[i] === 'a') {
            raidziuSuma++ ;
        }    
    }return `Tekste yra: ${raidziuSuma} `
}
    
console.log(kintamasisA('ar tu matei kas cia'), '= Pasirinktos raides a');
console.log(kintamasisA('ar as tai zinau ar vakar'), '= Pasirinktos raides a');
//if(obj[str[i]]){ obj[str[i]] += 1; }

