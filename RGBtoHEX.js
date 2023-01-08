//https://www.codewars.com/kata/513e08acc600c94f01000001
function rgb(r, g, b){
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

console.log(rgb(237,255,255) + " should be EDFFFF")
console.log(rgb(238,255,255) + " should be EEFFFF")
console.log(rgb(0,1,4) + " should be 000104")
console.log(rgb(120, 160, 222) + " should be 78A0DE")
console.log(rgb(0,0,0) + " should be 000000")
console.log(rgb(-1,555,-777) + " should be 00FF00")