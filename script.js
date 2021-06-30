/* Chiedi: nome;
   Chiedi: cognome;
   Chiedi: colore preferito;
    Scrivi sulla pagine nomecognomecolore21 come password    */


var message = 'La tua password é: '

var firstName = prompt("Qual'è il tuo nome?");
console.log(firstName)

var lastName = prompt("Qual'è il tuo cognome?");
console.log (lastName)

var favouriteColor = prompt("Qual'è il tuo colore preferito?");
console.log(favouriteColor)

var userPassword = document.getElementById('user-password');

userPassword.innerHTML = message + firstName + lastName + favouriteColor + 21;

