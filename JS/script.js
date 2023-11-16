// Chiediamo il suo nome

const your_name = prompt("what's your name?");
console.log(your_name);

// Chiedere il suo cognome

const your_last_name = prompt("what's your last name?");
console.log(your_last_name);

// Chiedere il colore preferito

const your_favourite_colour = prompt("What's your favourite colour?");
console.log(your_favourite_colour);

// Creazione password

const user_password = your_name + your_last_name + your_favourite_colour + 23;

console.log(user_password);

// Far apparire in pagina la password dell'utente

const passwordElement = document.getElementById("password");

passwordElement.innerHTML = `la tua password: ${user_password}`;
