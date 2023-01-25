//https://www.codewars.com/kata/63b06ea0c9e1ce000f1e2407/train/javascript
function alphabet(arr) {
  arr = arr.sort((a, b) => a - b);
  findAndDeleteElement(arr, (arr[0] * arr[1])); // delete AxB from input
  findAndDeleteElement(arr, (arr[1] * arr[2])); // delete BxC from input
  return arr[3];
}

function findAndDeleteElement(arr, el){
  arr.splice(arr.indexOf(el), 1)
}

//https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript
function trim(str, size) {
  if(str.length <= 3 && size == str.length) return str;
  if(str.length <= 3 && size > str.length) return str;
  if (str.length <= 3) return str.slice(0, size) + "...";
  if (size <= 3) return str.slice(0, size) + "...";
  if (str.length  <= size) return str;
  return str.slice(0, size - 3) + "..."
}
/*
console.log(trim("create", 4))      //c...
console.log(trim("create", 10))    // create
console.log(trim("cr", 1))    // c...
console.log(trim("cr", 2))    // cr...
console.log("---------")
console.log(trim("0123456", 5))    // 01...
console.log(trim("0123456789123",10 ))    // 0123456...
console.log(trim("Creating kata is fun", 14)) // Creating ka...'
*/

//https://www.codewars.com/kata/63cbe409959401003e09978b/train/javascript
function setReducer2(input) {
  if(input.length === 1) return input[0];
  let repeated = 0;
  let i = 0;
  while (i < input.length){
    if ((i !== input.length - 1 ) && input[i] === input[i + 1]){
      repeated += 1;
      input = deleteElementByIndex(input, i)
      i -= 1;
    } else if (repeated !== 0) {
      input[i] = repeated + 1;
      repeated = 0;
    } else {
      input[i] = 1;
    }
    i++;
  }
  return setReducer(input);
}

function deleteElementByIndex(arr, ind){
  return arr.slice(0, ind).concat(arr.slice(ind + 1))
}
//console.log(setReducer([ 1, 3, 8, 8, 3, 5, 5, 7])) // 2

//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript
var number = function(busStops){
  return busStops.reduce((acc, stop) => acc + (stop[0] - stop[1]), 0)
}

//https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript
function solution(start, finish){
  let numOfShelves = finish - start;
  let res = Math.floor(numOfShelves / 3);
  return res + (numOfShelves % 3);
}

//https://www.codewars.com/kata/5b93fecd8463745630001d05/train/javascript
function snail(column, day, night) {
  column -= day;
  if (column <= 0) return 1;
  return 1 + snail(column + night, day, night); //we add + 1 to column for night
}