// Number 8: write a function that returns an array of all input objects keys 

function getAllKeys(input){
    keys = Object.keys(input);
    return keys;
}

let input = {
    name: "Sam",
    age: 25,
    hasP: true
};

console.log(getAllKeys(input));