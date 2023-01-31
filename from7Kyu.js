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

//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
function getSum(a, b)
{
  if (a > b) [b, a] = [a, b];
  let sum = 0;
  while (a <= b) {
    sum += a;
    a++;
  }
  return  sum;
}

//https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript
function consonantCount(str) {
  return str.split("").reduce((acc, el) => {
    if (el.match(/[a-z]/i) && el !== "a" && el !== "e" && el !== "i" && el !== "o" && el !== "u") return (acc + 1)
    return acc + 0;
  }, 0)
}

//https://www.codewars.com/kata/5ba178be875de960a6000187/train/javascript
function findLowestInt(k) {
  let lowestInt = 2;
  while (!isRight(k, ++lowestInt)) {}
  return lowestInt;
}

function isRight(k, n){
  return ((k + 1) * n).toString().split("").sort().join("") === (k * n).toString().split("").sort().join("")
}

//console.log(findLowestInt(325))// 477

//https://www.codewars.com/kata/5a19226646d843de9000007d/train/javascript
function countConsonants(str) {
  str = str.toLowerCase();
  let res = []; // result
  str.split("").forEach(el => {
    if (isConsonate(el) && !res.includes(el) ) res.push(el);
  })
  return res.length;
}

function isConsonate(letter){
  if(letter.match(/[a-z]/i) && letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u") return true;
}
//console.log(countConsonants("sillystring"))//, 7, "do not count duplicated consonants!") "a", "e", "i", "o", "u".

//https://www.codewars.com/kata/58d3487a643a3f6aa20000ff/train/javascript
function minMinMax(array) {
  let max = Math.max(...array);
  let min = Math.min(...array);
  let i = min;
  while (++i < max) {
    if(!array.includes(i)) return [min, i,  max];
  }
}

//https://www.codewars.com/kata/56b0bc0826814364a800005a\
function cyclops(n) {
  n = n.toString(2);
  let midInd = (n.length - 1) / 2 // index of middle number
  if (n[midInd] !== "0") {
    return false
  }
  n = n.slice(0, midInd) + n.slice(midInd + 1);
  let ind = 0;
  while (ind++ < n.length) {
    if (n[ind] === "0") return false;
  }
  return true;
}
//console.log(cyclops(5)) //, true
//console.log(cyclops(3)) //, false

//https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript
function sumOfIntegersInString(s){
    let num = '';
    let sum = 0;
    s += " ";
    for (let i = 0; i < s.length; i++){
    if (s[i].match(/[0-9]/i) && !s[i + 1].match(/[0-9]/i)) {
        sum += +(num + s[i]);
        num = "";
    } else if (s[i].match(/[0-9]/i)){
        num += s[i];
    }
    }
    return sum;
}

let exampleTests = [
    ["12.4", 16],
    ["h3ll0w0rld", 3],
    ["2 + 3 = ", 5],
    ["Our company made approximately 1 million in gross revenue last quarter.", 1],
    ["The Great Depression lasted from 1929 to 1939.", 3868],
    ["Dogs are our best friends.", 0],
    ["C4t5 are 4m4z1ng.", 18],
    ["The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 3635]
  ]
//exampleTests.forEach(el => console.log(el[0] + "|||| " + sumOfIntegersInString(el[0]) + " === " + el[1]))


//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
function reverseLetter(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--){
        if (str[i].match(/[a-z]/i)) reverseStr += str[i];
    }
  return reverseStr;
}

//console.log(reverseLetter("ultr53o?n"))//,"nortlu")






















