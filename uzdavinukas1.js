
let stazas=44; //menesiais( galimas +5% to +10% pradinio atlyginimo didėjimas)
let lojalumas=55; //menesiais ilojalumas( galimas lojalumo bonusas nuo 20 iki 100 )
let produktyvumoKof=14; // koficijentas nuo -10.0 iki 10.0 ( uz neigiama produktyvuma galutinis atlygis mazinamas 2% už viena negatyvų koficijenta, arba didinamas 1,5% už kiekvieną pridetini koficientą )
let laipsnis=3; // id=0 darbuotojas = 1x; id= 1 specialistas =1.25x; id=2 vyr specialistas=1.35x; id=3 vadovo pavaduotojas=1.75x 
let atlyginimas= 500; // pradinis nuo 500

document.getElementById("submit").onclick=function()
{
    let stazas= document.getElementById("exp").value; 
    let lojalumas= document.getElementById("loyality").value;
    let produktyvumoKof= document.getElementById("efficiency").value;
    let laipsnis= document.getElementById("degree").value; // paemus is html imputa nerodo reiksmes
    let atlyginimas= document.getElementById("wage").value;

/* let stazas; //menesiais( galimas +5% to +10% pradinio atlyginimo didėjimas)
let lojalumas; //menesiais ilojalumas( galimas lojalumo bonusas nuo 20 iki 100 )
let produktyvumoKof; // koficijentas nuo -10.0 iki 10.0 ( uz neigiama produktyvuma galutinis atlygis mazinamas 2% už viena negatyvų koficijenta, arba didinamas 1,5% už kiekvieną pridetini koficientą )
let laipsnis; // id=0 darbuotojas = 1x; id= 1 specialistas =1.25x; id=2 vyr specialistas=1.35x; id=3 vadovo pavaduotojas=1.75x 
let atlyginimas; // pradinis nuo 500 */



// priedas nuo darbines patirties

if (stazas >= 12 && stazas < 24) {
    atlyginimas=atlyginimas*105/100   //atlyginimas didinamas 5%
}
    else if (stazas >= 24 && stazas < 36) { {
    }
        atlyginimas=atlyginimas*108/100 //atlyginimas pakeltas 8% nuo bazinio pradinio atlyginimo
    }
    else if (stazas >= 36 && stazas < 48) {
        atlyginimas=atlyginimas*110/100 //atlyginimas pakeltas 10% nuo bazinio pradinio atlyginimo
    }
    else if (stazas >= 48 && stazas < 60) {
        atlyginimas=atlyginimas*112/100 //atlyginimas pakeltas 12% nuo bazinio pradinio atlyginimo
    }
    else if (stazas >= 60 ) {
        atlyginimas=atlyginimas*115/100 //turint 5 metu stažą atlyginimas didinamas 10% muo pradinio bazinio dydžio
    }
    else {
        atlyginimas=atlyginimas
    }
// lojalumo bonusas

let lojalumoBonusas= 0 ;

    if (lojalumas >= 12 && lojalumas < 24) {
        lojalumoBonusas=20;   
    }
        else if (lojalumas >= 24 && lojalumas < 36) { {
        }
        lojalumoBonusas=30; 
        }
        else if (lojalumas >= 36 && lojalumas < 48) {
            lojalumoBonusas=50;
        }
        else if (lojalumas >= 48 && lojalumas < 60) {
            lojalumoBonusas=70;
        }
        else if (lojalumas >= 60 && lojalumas < 72 ) { 
            lojalumoBonusas=85;
        }
        else if (lojalumas >= 72 ) {   
                lojalumoBonusas=100;
            }
        else {
            lojalumoBonusas=0;
        }


// Atlyginimo kitimas nuo užiamamų pareigų

switch (laipsnis) {
    default:
        try {
             if  (laipsnis < 0 || laipsnis > 3) throw "Nurodytas netinkamas darbuotojo uzemamu paraigu laipsnis";}
             catch (error){
            console.log(error)
        }
    case 0:
        laipsnis = 1
        break;
         case 1:
            laipsnis = 1.25
            break;
             case 2:
            laipsnis = 1.35
            break;
            case 3:
            laipsnis = 1.75
            break;

}

let laipsnioPriedas=(((atlyginimas+lojalumoBonusas)*laipsnis)-(atlyginimas+lojalumoBonusas))


//produktyvumas

let produktyvumas = 0;
if (produktyvumoKof < -10){
    produktyvumas= (-10)*0.02; //neigiamo efektingumo lubos yra -20% nuo galutinio atlyginimo
}
else if (produktyvumoKof >= -10 && produktyvumoKof<0){
    produktyvumas = (produktyvumoKof) * 0.02;
}
else {
    if (produktyvumoKof > 10){
        produktyvumas=10* 0.015; //maksimalus efektingumo lubos yra +15%
    }
    else {
        produktyvumas=produktyvumoKof * 0.015;
    }
}
let efektingumoIsraiska;
if (produktyvumas < 0) {
    efektingumoIsraiska="Nuskaiciuota: "
}
else{
    efektingumoIsraiska="Priskaiciuota"
}

console.log(atlyginimas)
console.log(lojalumoBonusas)
console.log(laipsnioPriedas)
console.log(produktyvumas)
console.log(((atlyginimas+lojalumoBonusas)*laipsnis)*produktyvumas)
console.log((atlyginimas+lojalumoBonusas)*laipsnis)

console.log("Visas gautas atlyginimas: " +(((atlyginimas+lojalumoBonusas)*laipsnis)+(((atlyginimas+lojalumoBonusas)*laipsnis)*produktyvumas)), "Iskaitant: " + "(lojalumo prieda) +" + lojalumoBonusas + ";", "(jūsų užimamos pareigų priedelis) +" +laipsnioPriedas, "Priklausant nuo jūsu darbo našumo jums buvo: ", efektingumoIsraiska, (((atlyginimas+lojalumoBonusas)*laipsnis)*produktyvumas))
}
