// Array Methods

// .length
const a = ['one','two', 'three', 'four', 'five'];
console.log(a.length)

const x = new Array(1, 2, 3, 4, 5 ,6);
console.log(x.length)

var getLastval = a[a.length - 1];
console.log('getLast value', getLastval)

// .indexof()
var getpos1 = a.indexOf('four');
console.log('getpos1', getpos1)

//.include()
var getpos2 = a.includes('three');
console.log('getpos2', getpos2)

//.push()
a[3] = 'Rupali'
console.log(a)

// var ins1 = a.push('Rupali')
//.unshift()
var ins2 = a.unshift('Amruta')
console.log(a);

// .pop()
var rem1 = a.pop('Rupali')
console.log(a);

// .shift()
var rem2 = a.shift()
console.log(a)

//.reverse() using reverse method
var rev = a.reverse()
console.log(a);

//.reverse() using loop method
arr = [1, 2, 3, 4, 5];
arr1 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
}
console.log(arr1);

//.map()
var data = x.map(data => data + 20)
console.log('map data', data);

//.foreach()
var data1 = x.forEach(data => {
    console.log('foreach data', data + 10)
})

//filter()
const words = ['sparrow', 'peacock', 'eagle', 'swan', 'hummingbird', 'piegon'];

const result = words.filter(word => word.length > 6);

console.log(result);

//.sort()
const months = ['May', 'June', 'Feb', 'oct'];
months.sort();
console.log(months);

//.concat()
const array1 = ['j', 'k', 'l'];
const array2 = ['m', 'n', 'o'];
const array3 = array1.concat(array2);
console.log(array3);

//.every()
const isBelowThreshold = (currentValue) => currentValue < 40;

const array = [1, 30, 39, 29, 10, 13];

console.log(array.every(isBelowThreshold));

//.some()
const array11 = [1, 2, 3, 4, 5];

const even = (element) => element % 4 === 0;

console.log(array11.some(even));

//.join()
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());

console.log(elements.join(''));

console.log(elements.join('-'));

//.reduce()
const array12 = [1, 2, 3, 4];

const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(array12.reduce(reducer));

//.find()
const array13 = [5, 12, 8, 130, 44];

const found = array13.find(element => element > 10);

console.log(found);

//.findIndex()
const array14 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array14.findIndex(isLargeNumber));

//.fill
const array15 = [1, 2, 3, 4];

console.log(array15.fill(0, 2, 4));

//.slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(3));