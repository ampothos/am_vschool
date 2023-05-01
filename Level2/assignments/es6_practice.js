const manName = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name; 
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", manName)
    return petObjects;
}

runForLoop(["cat", "dog"])


//arrow functions
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}

console.log(mapVegetables(carrots))

//filter 
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => person.friendly)
}
console.log(filterForFriendly(people))


const sum = (a, b) => a + b;

let produceProduct = (a, b) => a * b;


function printString(firstName = "Jane", lastName = "Doe", age = 100) {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
function filterForDogs(arr) {
    return arr.filter(animal => animal.type === "dog");
}

console.log(filterForDogs(animals))

function welcome(location, name) {
    return `Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
}