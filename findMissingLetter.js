//https://www.codewars.com/kata/5839edaa6754d6fec10000a2
// to run test write: "npm test --require ./test/findMissingLetterTest.js"
// or "npm test"
exports.findMissingLetter = function findMissingLetter(array) {
  for(const el of array){
    if(array[array.indexOf(el) + 1].charCodeAt(0) - el.charCodeAt(0) === 2) {
      return String.fromCharCode(el.charCodeAt(0) + 1)
    }
  }
}