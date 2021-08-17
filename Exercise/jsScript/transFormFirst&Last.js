
// Number 7 ;
// input = ["Kelvin","Bacon","Love","Hart","Costner","Coleman"]
// output = { 
//     kelvin:"Coleman"
// }

// input = ["Queen", "Elizabeth","Of Hearts", "Beyonce"];
// output =  {
//     Queen: "Beyonce"
// }


function transformFirstAndLast(arr){
    let obj = {};
        let value = arr[arr.length -1];
        obj[arr[0]]= value
    return obj;
}

let arr = ["Kelvin","Bacon","Love","Hart","Costner","Coleman"]
let arr2 = ["Queen", "Elizabeth","Of Hearts", "Beyonce"];
console.log(transformFirstAndLast(arr));
console.log(transformFirstAndLast(arr2));