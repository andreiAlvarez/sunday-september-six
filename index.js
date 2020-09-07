// One
const filteredArray = (arr, elem) => {
  let newArr = [];
  
for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1){
newArr.push(arr[i]);
      }      
      }
  // Only change code above this line
  return newArr;
}


console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));

//two

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  [
    ['loop', 'shift', 6, 7, 1000, 'method', 'deep'],
  [
    ['concat', false, true, 'spread', 'array', 'deeper'],
    [
  ['mutate', 1327.98, 'splice', 'slice', 'push', 'deepest']
    ]
  ],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  ]
  // Only change code above this line
];
