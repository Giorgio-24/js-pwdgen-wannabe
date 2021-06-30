/* Chiedi: nome;
   Chiedi: cognome;
   Chiedi: colore preferito;
    Scrivi sulla pagine nomecognomecolore21 come password    */


var message = 'La tua password é: '

var firstName = prompt("Qual'è il tuo nome?");
console.log(firstName)

var lastName = prompt("Qual'è il tuo cognome?");
// console.log (lastName)

var favouriteColor = prompt("Qual'è il tuo colore preferito?");
console.log(favouriteColor)

var userPassword = document.getElementById('user-password');

userPassword.innerHTML = message + firstName + lastName + favouriteColor + '21';


var message = 'Benvenuto '
var userPassword = document.getElementById('welcome');

userPassword.innerHTML = message + firstName;



var message = 'Sei nato nel '

var dayOfBirth = prompt("Qual'è il giorno in cui sei nato?");
console.log(dayOfBirth)

var monthOfBirth = prompt("Qual'è il mese in cui sei nato?");
console.log (monthOfBirth)

var yearOfBirth = prompt("Qual'è l'anno in cui sei nato?");
console.log(yearOfBirth)

var userBirth = document.getElementById('user-birth');

userBirth.innerHTML = message + dayOfBirth + '/'  + monthOfBirth + '/'   + yearOfBirth;


message = 'Hai ottenuto il numero: 5'

var immaginaryNumber = prompt("Pensa ad un numero qualsiasi di due cifre, ma non scrivere NIENTE, man mano che ti verranno date le istruzioni esegui i calcoli a mente e semplicemente premi il tasto INVIO per passare all'istruzione successiva.");

var immaginaryNumberStep2 = prompt('Pensa ad un numero qualsiasi di due cifre');

var immaginaryNumberMinusTens = prompt('Sottrai dal numero pensato la cifra delle decine es: Il numero pensato è "27" quindi fai - 2');


var newImmaginaryNumberMinusUnits = prompt('Sottrai dal nuovo risultato la cifra che rappresentava le unità del numero che per primo hai pensato es: Il numero pensato era "27" quindi fai - 7 al nuovo risultato');


var newImmaginaryNumberPlusTensAndUnits = prompt('Somma fra loro le cifre del numero ottenuto es: "14" 1+4 ');


var newImmaginaryNumberPlus5= prompt("Aggiungi 5 al risultato");


var newImmaginaryNumberPlusTensAndUnitsAgain = prompt("Di nuovo, somma tra loro le cifre del nuovo numero ottenuto");


var mentalNumbersResult = document.getElementById('mental-numbers');


mentalNumbersResult.innerHTML = message ;









var message = 'Hai ottenuto il numero: '

var userNumber = prompt("ATTENZIONE! QUESTO E' UN TEST DIFFERENTE DA QUELLO APPENA CONCLUSO! Pensa di nuovo ad un numero qualsiasi, ma stavolta man mano che ti vengono date nuove istruzioni scrivi ogni volta il nuovo risultato che avrai ottenuto. NOTA BENE che il computer non può sapere il risultato finale che hai ottenuto dal test fatto in precedenza, poichè NON LO HAI TRASCRITTO ma solo pensato, ma riuscirà a leggerti nel pensiero e qualunque numero tu sceglierai stavolta, il RISULTATO finale SARA' UGUALE a quello della sezione PRECEDENTE. Buona fortuna! SCRIVI IL TUO NUMERO QUI SOTTO.");

var userNumberPlus4 = prompt("Aggiungi 4 al numero pensato");

var userNumberPlus4 = parseInt(userNumber) + 4;



var newUserNumberx2 = prompt("Moltiplica per 2");

var newUserNumberx2 = parseInt(userNumberPlus4) * 2;



var newUserNumberPlus10 = prompt("Aggiungi 10 al numero ottenuto");

var newUserNumberPlus10 = parseInt(newUserNumberx2) + 10;



var newUserNumberMinus8 = prompt("Togli 8");

var newUserNumberMinus8 = parseInt(newUserNumberPlus10) - 8;



var newUserNumberSplit2 = prompt("Dividi per 2 il numero ottenuto");

var newUserNumberSplit2 = parseInt(newUserNumberMinus8) / 2;



var finalUserNumber = prompt("Sottrai il numero che avevi pensato");

var finalUserNumber = parseInt(newUserNumberSplit2) - userNumber;




var result = document.getElementById('numbers');


result.innerHTML = message + finalUserNumber;




