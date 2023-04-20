numarr = []
for (let i = 0; i <= 9; i++){
    numarr.push(i)
}
console.log(numarr)

for (let i = 0; i <= 9; i++){
    console.log(i)
}

const fruit = ["banana", "orange", "apple", "kiwi"]
for (let f of fruit){
    console.log(f)
}

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
for (let person of peopleArray){
    console.log(person.name)
}
let names = []
let occupations = []
for (let person of peopleArray){
    names.push(person.name)
    names.push(person.occupation)
}

let everyOtherName = []
for (let i = 0; i < peopleArray.length; i = i + 2){
    everyOtherName.push(peopleArray[i])
}
console.log(everyOtherName)