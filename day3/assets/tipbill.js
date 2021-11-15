const billval=[50,100,150,200,250,300,350,400];
const tip = [];
const total = [];

const calTip = (billval) => {
    for(let i = 0; i < billval.length; i++){
        if(billval[i] >=50 && billval[i] <= 300){
            tip.push(billval[i] * 0.15);
            total.push(billval[i] + (billval[i] * 0.15))
        }else{
            tip.push(billval[i] * 0.20);
            total.push(billval[i] + (billval[i] * 0.2))
        }
    }
}

calTip(billval);
console.log('bill val', billval)
console.log('calc tip', tip)
console.log('final bill', total);