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





var message = 'Sei nato nel '

var dayOfBirth = prompt("Qual'è il giorno in cui sei nato?");
console.log(dayOfBirth)

var monthOfBirth = prompt("Qual'è il mese in cui sei nato?");
console.log (monthOfBirth)

var yearOfBirth = prompt("Qual'è l'anno in cui sei nato?");
console.log(yearOfBirth)

var userBirth = document.getElementById('user-birth');

userBirth.innerHTML = message + dayOfBirth + '/'  + monthOfBirth + '/'   + yearOfBirth;



