
// Number 1; given a Number(age), write a function to determine if that person is old enough to legally frink or not

function isOldEnoughToDrink (num){
    if( num >= 18) return true;
    else return false;
}
console.log(isOldEnoughToDrink(22));


// Number 2; given a Number(age), write a function to determine if that person is old enough to legally drink  and drive
function oldEnoughToDrinkAndDrive(num){
    // since it always illegal to drink and drive, all parameters/age will always return false
    return false
}
console.log(oldEnoughToDrinkAndDrive(22));


// Number 5; given an object with a key age and value write a function that
// returs true or false if isOldEnoughToDrinkAndDrive when it is always illegal to drink and drive in nigeria
function isOldEnoughToDrinkAndDrive(obj){
    val = obj.age
    return oldEnoughToDrinkAndDrive(val);   
}

let obj = {
    age:45
}
console.log(isOldEnoughToDrink(obj))