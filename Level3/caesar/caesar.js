var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function shiftLetters(input, shift) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //convert input to array to be mapped
    const inputToParse = input.split("");

    //map the input to be joined later
    const caesar = inputToParse.map(letter => {
        //check if it is a letter before shifting
        if (alphabet.includes(letter)) {
            const originalLetterIndex = alphabet.indexOf(letter);

            //check shift will not exceed array length
            //if so, the index wraps around to the front of the alphabet array
            if (originalLetterIndex + shift > 26) {
                return alphabet[(originalLetterIndex + shift) - 26]
            }
            else {
                return alphabet[originalLetterIndex + shift]
            }
        }
        //not a letter
        else {
            return letter
        }
    })
    return caesar.join("")
}

console.log(shiftLetters(input, shift))