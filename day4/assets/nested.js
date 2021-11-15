const arr = [[0, 1], [2, 3], [4, 5, [6, 7, [8, [9, 10]]]]]

function FlatArray(arr) {
  let flatArray = [];
  function rec(a) {
    if (!Array.isArray(a)) {
      flatArray.push(a);
    } else {
      for (let i = 0; i < a.length; i++) {
        rec(a[i]);
      }
    }
  }
  rec(arr);
  return flatArray;
}

const flatArray = FlatArray(arr);

console.log("flatArray", flatArray);
