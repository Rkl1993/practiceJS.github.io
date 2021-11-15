const users = [
    { name: 'Rupali', age: 25 },
    { name: 'Chaitanya', age: 30 },
    { name: 'Rekha', age: 55 },
    { name: 'Shaurya', age: 25 },
    { name: 'Jayashree', age: 30 },
 ];
 function groups(Array, property) {
    return Array.reduce((a,b) => {
       const key = b[property];
       if (!a[key]) {
          a[key] = [];
       }
      
       a[key].push(b);
       return a;
    }, {});
 }
 const groupedusers = groups(users, 'age');
 console.log(groupedusers);