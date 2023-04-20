var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    alpha = alphabet.split('')
    let arr = []
    for (let person of people) {
        arr.push(person)
        for (let letter of alphabet){
            arr.push(letter.toUpperCase())
        }
    }
    return arr
}

console.log(forception(people, alphabet))