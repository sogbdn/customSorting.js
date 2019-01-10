var array = ["John", "Bob", "Alice", "Mary"];
array.sort();
console.log(array);

var array = [5, 2, 1, 3, 4];
array.sort();
console.log(array);

var array = [10, 2, 5, 1, 9];
array.sort();
console.log(array);

array.sort(function(a,b) {
  return a - b
})
console.log(array);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// examinate each name in object in the array
// sort each name
// if 2 names are the same, check the ages and choose the older


students.sort(function(a, b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return b.age - a.age; // sort descending
})
 console.log(students);




