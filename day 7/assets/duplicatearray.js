// Task1

array = [1,2,3,4,5];
console.log("Array before ",array);
function addValue(arr,value){
   let valid = arr.includes(value);
    if(valid==true){
        console.log("Value  already exists")
    }else{
        arr.push(value);
        console.log("Added value is",value);
    }
}
let value = 4;

addValue(array,value);
console.log("Array after",array);

//Task2

var arr = []
arr = [1,2,3,2,1,4,5,5,6,4,4,6,7,7,7,7]
var arr1 ={}
count = 1
for(var i = 0; i < arr.length; i++) {
    if(arr1[arr[i]]) {
        count++;
    arr1[arr[i]].push(arr[i]);
    } else {
    arr1[arr[i]] = [arr[i]];
    }
    }
    console.log (arr1);