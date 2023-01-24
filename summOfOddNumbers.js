//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
function countAllNumbersInTriangle(row){
  if(row === 1) return 1;
  return row + countAllNumbersInTriangle(row - 1)
}

function rowSumOddNumbers(n) {
  let lastEl = countAllNumbersInTriangle(n) * 2 - 1; // last element in a given row
  let sum = lastEl;
  for(let i = 1; i < n; i++){
    lastEl -= 2;
    sum += lastEl;
  }
  return sum;
}