var ps = require("prompt-sync");
var prompt = ps();

console.log("Hej och Välkommen Till Vårt Spel!")
console.log("Du kommer få 3 försök")
console.log("Lycka Till!")

function GissaNummer() {

    const random = Math.floor(Math.random() * 10) + 0;

    let tries = 2;
    
    let number;

    while(number !== random) {
        let number = parseInt(prompt('Gissa på ett nummer från 0 till 10: '));
        if(number === random) {
            console.log('Du Gissade Rätt Grattis.');
            break;
        } else if (tries === 0) {
            console.log("Du gissade fel För sista gången GAME OVER!")
            break;  
        } else {
            console.log("Du Gissade Fel")
            tries--;
        }
    }

  } 
  
GissaNummer()