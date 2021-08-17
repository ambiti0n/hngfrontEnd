
// Number 3, write a function getProperty that returns the value of a property at the given key

function getProperty (obj,key){
    val = obj[key]
    return val
}

let obj = {
    key : "value"
};
console.log(getProperty(obj,"key"));



