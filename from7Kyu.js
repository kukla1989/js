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
//or
function snail2(column, day, night){
  let days = 0;
  while(column > 0){
    days++;
    column -= day;
    if(column <= 0) break;
    column += night;
  }
  return days
}

//https://www.codewars.com/kata/57b5907920b104772c00002a/train/javascript
function height(n) {
  let nextCatHeight = 2_000_000;
  let res = nextCatHeight;
  while(n > 0) {
    nextCatHeight /= 2.5;
    res += nextCatHeight;
    n--;
  }
  return res.toFixed(3);
}

//https://www.codewars.com/kata/55805ab490c73741b7000064/train/javascript
var makeBackronym = function(string){
  return string.split("").reduce((acc, el) => acc + " " + dict[el.toUpperCase()], "").slice(1)
};

//https://www.codewars.com/kata/561e1e2e6b2e78407d000011/train/javascript
function closestPairTonum(n) {
  n--;
  for(let i = n; i >= 1; i--){
    for(let j = n - 1; j >= 1; j--){
      if(arePerfectSquare(i, j)) return [i, j];
    }
  }
}

function arePerfectSquare(a, b) {
  return a !== b && Math.sqrt(a + b) % 1 === 0 && Math.sqrt(a - b) % 1 === 0
}
//console.log(closestPairTonum(10)) // [5, 4]);)
//console.log(closestPairTonum(30))  //, [29, 20])

//https://www.codewars.com/kata/570523c146edc287a50014b1/train/javascript
function numberJoy(n) {
  let sumN = n.toString().split("").reduce((acc, el) => acc + +el, 0);
  if((n / sumN) % 1 !== 0) return false;
  let invertedSumN = +sumN.toString().split("").reverse().join("")
  if (sumN * invertedSumN === n) return true
  return false
}
//console.log(numberJoy(81))   //, true,)
//console.log(numberJoy(1458))//, true)

//https://www.codewars.com/kata/57af26297f75b57d1f000225/train/javascript
function truncateString(str, num) {
  if (num <= 3) return str.slice(0, num) + "...";
  if (num >= str.length) return str
  return str.slice(0, num - 3) + "...";
}
/*
function test(arg1, arg2, expected){
  console.log(truncateString(arg1, arg2) + " === " + expected)
}

test('chingel', 8, 'chingel');
test('chingel', 6, 'chi...');
test('chingel', 2, 'ch...');
test('pippi', 3, 'pip...');
test('012345', 5, '01...')
*/

//https://www.codewars.com/kata/5bc9bc4e703b2d2081000001/train/javascript
function pooRoulette(p) {
  let arr = findBaby(p); // iv - index Verticall
  if (!arr) return "Calm before the storm";// dont find Baby - "B" in p
  let [iv, ih] = arr;
  if ((p[iv][ih - 3] && (p[iv].slice(ih - 3, ih).join("") == "~~~")) ||
    (p[iv][ih + 3] && p[iv].slice(ih + 1, ih + 4).join("") == "~~~")){
    return "You disgust me!";
  }
  if((p[iv - 3] && p[iv - 3][ih] == '~' && p[iv - 2][ih] == '~' && p[iv - 1][ih] == '~') || (p[iv + 3] && p[iv + 3][ih] == '~' && p[iv + 2][ih] == '~' && p[iv + 1][ih] == '~')){
    return "Get the wipes!";
  }
  return "Calm before the storm";
}

function findBaby(p){
  let i = 0;
  for(i; i < p.length; i++){
    if(p[i].indexOf("B") !== -1) return [i, p[i].indexOf("B")];
  }
}
/*
.log(pooRoulette([
    [ '~', '~', '~', 'B', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
    ])) //, "You disgust me!");)
    console.log("________")

console.log(pooRoulette([
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'B', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ]))///, "Get the wipes!");
    console.log(pooRoulette([
    [ 'o', 'B', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', '~', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ]))///, "Get the wipes!");
console.log(pooRoulette([
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', '~', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'B', 'o', 'o', 'o', 'o'],
    [ 'o', 'o', 'o', 'o', 'o', 'o', 'o']
    ]))//, "Calm before the storm");)
 */