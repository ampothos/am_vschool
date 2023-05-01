function product(...nums) {
    const numbers = [...nums];

    return numbers.reduce(function(acc, number) {
        return acc * number;
    }, 1);
}

function unshift(array, ...stuff) {
    return [...stuff, array];
}

const arr1 = [1, 3, 4, 5, 2, 12, 45, 3]
const arr2 = [3, 1, 3, 23, 'j', 'jlkj', 4]

const newarr = [...arr1, ...arr2];
console.log(newarr)