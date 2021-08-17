// Number 4, write a functin addProperty that set a new property in an obj with a value true; 
function addProperty(myObj, keys){
    myObj["keys"] = true;
   return myObj.keys;
}
let myObj = {}

console.log(addProperty(myObj, "myProperty"))