const readline = require("readline-sync")
//3 options 
//find the key
//open the door - can't without the key
    //  put your hand in the hole - death

let key = false
let doorOpen = false

//get name 
const name = readline.question("Enter your name: ")

const options = ['Find the key', 'Open the door', 'Put your hand in the hole']

//while no key or no doorOpen
    //choice 
        //if 0: key
        //if 1: 
            //if no key
                //console.log(no key! try again)
            //dooropen = true
        //if 2: 
            //if no door open
                //console.log(door closed! try again)
            //else = you dead 
while (!key || !doorOpen) {
    let choice = readline.keyInSelect(options, "What will you do?")
    if (choice == 0) {
        key = true
        console.log("Here's a key! o--*")
    }
    else if (choice == 1) {
        if (key) {
            doorOpen = true
            console.log("The door is open!")
            console.log("___")
            console.log("|o|")
        }
        else {
            console.log("Fool! You have no key. Try again.")
        }
    }
    else if (choice == 2){
        if (!doorOpen) {
            console.log("The door is closed, you can't get to it! Try again.")
        }
    }
}
let choice = readline.keyInSelect(options, "What will you do?")
    if (choice == 0) {
        console.log("You already have the key, silly.")
    }
    else if (choice == 1) {
        console.log("The door is already open!")
    }
    else if (choice == 2) {
        console.log("A wild cthulu has pulled you in! You are dead x_x")
    }