//https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript
function trim(str, size) {
  if(str.length <= 3 && size == str.length) return str;
  if(str.length <= 3 && size > str.length) return str;
  if (str.length <= 3) return str.slice(0, size) + "...";
  if (size <= 3) return str.slice(0, size) + "...";
  if (str.length  <= size) return str;
  return str.slice(0, size - 3) + "..."
}

console.log(trim("create", 4))      //c...
console.log(trim("create", 10))    // create
console.log(trim("cr", 1))    // c...
console.log(trim("cr", 2))    // cr...
console.log("---------")
console.log(trim("0123456", 5))    // 01...
console.log(trim("0123456789123",10 ))    // 0123456...
console.log(trim("Creating kata is fun", 14)) // Creating ka...'
