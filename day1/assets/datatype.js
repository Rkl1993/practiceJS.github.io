console.log("hello");


//-------------------Primitive-------------------//
//String
var Str="This is string";

console.log(Str,"type of",typeof Str);


//Constant
const a =10; 
console.log("constant a has value of",a,"and it's type is",typeof a);


//Number
var b= 10;
console.log("b is type of  ",typeof b)


//Null
var c=null;
console.log("C is type of",typeof c);

//undefined
var d;
console.log("D is type of",typeof d);

//boolean
let e = true;
console.log("e has value of",typeof e)


//--------------Non Primitive--------------------//

//Object
let Obj={

    firstName: "Bryan",
    lastName: "Adams",
    age:20
}

console.log(typeof Obj);
console.log(Obj.firstName);
console.log(Obj.age);

//Array 
let arr = [10,20,"text",40];
console.log(arr[2],arr[3]);


var x = 10;
console.log("This is x before function",x);

//Function 
function trial(){
    let x=15;
    console.log("This is x in function",x)
}
console.log("Trial is",typeof trial)
trial();

console.log("This is x after function call",x);