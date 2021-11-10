// function exp
const sub = function(arg1,arg2){
    let b = arg1-arg2
    return b
}
//arrow function
var a = 10;
var b = 10;

//function declaration
function add(){
    let c = a + b
    return c
}
const multiply =() =>a ** b;
console.log(multiply());

//function reassigning
var getval1 = sub(30, 20);
var getval2 = sub(40, 10);
var getval3 = sub(50, 40);
var getval4 = sub(60, 30);
console.log(getval1, getval2, getval3, getval4);