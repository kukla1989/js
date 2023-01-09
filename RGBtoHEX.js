//https://www.codewars.com/kata/513e08acc600c94f01000001
//to run test write: "npm test --require ./test/RGBToHEXTest.js" or "npm test"
exports.convert = function rgbToHex(r, g, b){
  return toHexadecimal(r) + toHexadecimal(g) + toHexadecimal(b)
}

function toHexadecimal(num) {
  //check for number that out of range
  if(num < 1){
    return "00"
  } else if (num > 254){
    return "FF"
  }

  if(num % 16 === 0) {
    return "" + decimalToHexa(num / 16) + 0
  }

  let remind = num % 16
  return "" + decimalToHexa((num - remind) / 16) + decimalToHexa(remind)
}

function decimalToHexa(num) {
  if (num < 10) {
    return num
  }else {
    let obj = {10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F"}
    return obj[num]
  }
}

/*
another solution
function toHexadecimal(num){
  num = Number(num)
  if (num <= 0) {return "00"}
  else if (num >= 255) {return "FF"}
  else {return ("0" + num.toString(16)).slice(-2).toUpperCase()}
}
 */

console.log(this.convert(1, 10, 100))