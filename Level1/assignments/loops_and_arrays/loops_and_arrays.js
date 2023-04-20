//count how many "computer" 
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let count = 0
for (let item of officeItems){
    if (item == "computer"){
        count++
    }
}
console.log(count)

//Log "old enough" if 18 or older, "not old enough" if not 18
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

for (let person of peopleWhoWantToSeeMadMaxFuryRoad){
    if (person.age < 18){
        console.log(person.name + " is not old enough to see Mad Max")
    }
    else{
        console.log(person.name + " is old enough to see Mad Max")
    }
}

//Loop through the following array of numbers and toggle the button the numbers of times for each number
function toggleLight(a) {
    let lightIsOn = false
    for (num of a) {
        for(let i = 0; i < num; i++){
            lightIsOn = !lightIsOn
        }
    }
    return lightIsOn
}
arr = [2, 5, 435, 4, 3]

isLight = toggleLight(arr)
if (isLight){
    console.log("The light is on")
}
else {
    console.log("The light is off")
}