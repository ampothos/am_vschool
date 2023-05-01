function total(arr) {
    return arr.reduce((final, num) => {
        return final +=num;
    }, 0)
}

console.log(total([1,2,3])); // 6

function stringConcat(arr) {
    return arr.reduce((final, current) => {
        return final += String(current);
    }, "");
}

console.log(stringConcat([1,2,3])); // "123"

function totalVotes(arr) {
    return arr.reduce((final, vote) => {
        if (vote.voted) {
            final += 1;
        }
        return final;
    }, 0)
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
    return arr.reduce((final, item) => {
        return final += item.price;
    }, 0)
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
    return arr.reduce((final, a) => {
        for (let x of a) {
            final.push(x);
        }
        return final;
    }, [])
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   return arr.reduce((final, vote) => {
        if (vote.age <= 25 && vote.age > 17) {
            final.numYoungPeople += 1;
            if (vote.voted) {
                final.numYoungVotes += 1;
            }
        }
        else if (vote.age <= 35 && vote.age >=26) {
            final.numMidsPeople += 1;
            if (vote.voted) {
                final.numMidVotesPeople += 1;
            }
        }
        else if (vote.age <= 55 && vote.age >= 36) {
            final.numOldsPeople += 1;
            if (vote.voted) {
                final.numOldVotesPeople += 1;
            }
        }
        return final;
   }, {numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 3,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0});
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
