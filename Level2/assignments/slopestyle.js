function collectAnimals(...animals) {
    return [...animals];
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
//---------------------------------
function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

//-----------------------------
function parseSentence(obj){
    const {location, duration} = obj;
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence({
location: "Burly Idaho",
duration: "2 weeks"
}));
//-------------------------------

function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}
console.log(returnFirst(["1", "2"]))

//--------------------------------
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr;
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

console.log(returnFavorites(favoriteActivities));

//-------------------------------
//***************************
//-------------------------------

function combineAnimals(...arrs) {
    return [...arrs].reduce((final, a) => {
        return [...final, ...a]
    }, [])
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

//-------------------------------
//***************************
//-------------------------------

function product(...nums) {
    let numbers = [...nums];
  
    return numbers.reduce((acc, number) => acc * number, 1)
}
console.log(product(1, 2, 3));
//----------------------------

function unshift(array, ...items) {
    return [...items, ...array];
  }
  
console.log(unshift(["dog", "cat"], "food", "bird", "horse"));
//------------------------------

function populatePeople(names){
    return names.map(name => {
        name = name.split(" ");
        let [firstName, lastName] = name;
        return {firstName, lastName};
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]