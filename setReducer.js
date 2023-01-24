//https://www.codewars.com/kata/63cbe409959401003e09978b/train/javascript
function setReducer(input) {
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


console.log(setReducer([ 1, 3, 8, 8, 3, 5, 5, 7])) // 2