const bills=[50,100,150,200];
console.log("fixed bills are as follows ",bills);
let indexVal = bills.indexOf(50);
// console.log("index value of bill is ",indexVal);
let bill = bills[indexVal];
console.log("Your Bill value is ",bill);

if(bill<100){
    console.log("GST is 15%")
    let gst= (bill*15)/100;
    console.log("GST value is",gst)
    bills[indexVal]=bill+gst;
    console.log("final bill list is",bills);
}
else{
    console.log("GST is 20%");
    let gst = (bill*20)/100;
    console.log("GST value is",gst);
    bills[indexVal]=bill+gst;
    console.log("final bill list is",bills);
}