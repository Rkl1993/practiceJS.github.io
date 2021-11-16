let users =     
  { 'red': "#FF0000",
   'green': "#00FF00",
   'white': "#FFFFFF",
};
//   let clone ={}
//   for (let key in users) {
//       clone [key] = users [key]
//   }
//   console.log(users);
  console.log(Object.entries(users));

  //reverse output
  let colors =     
  { 'red': "#FF0000",
  'green': "#00FF00",
  'white': "#FFFFFF",};
// console.log(Object.entries(colors));

// major/minor object
minmaj = {
    age: function(age){
        if(age >= 18){
            console.log("age is major");
        }else{

            console.log("age is minor");
        }
        }
        }
    console.log(minmaj.age(16));

