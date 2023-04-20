const readline = require("readline-sync")

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1  - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function main() {
    const num1 = parseInt(readline.question("Enter your first number: "))
    const num2 = parseInt(readline.question("Enter your second number: "))

    const operations = ["Add", "Subtract", "Multiply", "Divide"]

    const i = readline.keyInSelect(operations, "Choose an operation: ")
    if (i == 0){
        console.log("Result: " + add(num1, num2))
    }
    else if (i==1) {
        console.log("Result: " + subtract(num1, num2))
    }
    else if (i==2) {
        console.log("Result: " + multiply(num1, num2))
    }
    else if (i==3) {
        console.log("Result: " + divide(num1, num2))
    }

}

main()