//prints each number 1-100 on a new line 
//multiples of 3: print fizz
//multiples of 5 : print buzz
//both: print fizzbuzz

//create array 1-100 w for loop 
//create fizzBuzzCounter object w fizz, buzz, fizzbuzz
//if multiple of 15
//if multiple of 5
//if multiple of 3

let numArray = []
for (let i = 1; i <= 100; i++){
    numArray.push(i);
}

let fizzBuzzCounter = {
    fizz: 0,
    buzz: 0,
    fizzbuzz: 0
}

for (let num of numArray) {
    if (num % 15 == 0) {
        console.log("fizzbuzz");
        fizzBuzzCounter.fizzbuzz++;
    }
    else if (num % 5 == 0) {
        console.log("buzz");
        fizzBuzzCounter.buzz++;
    }
    else if (num % 3 == 0){
        console.log("fizz");
        fizzBuzzCounter.fizz++;
    }
    else {
        console.log(num);
    }
}
console.log(fizzBuzzCounter);