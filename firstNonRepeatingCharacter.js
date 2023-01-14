//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e
exports.find = function  firstNonRepeatingCharacter(str){
  let strArgument = str
  str = str.toLowerCase()
  for(let i = 0; i < str.length; i++){
    if(deleteOneChar(str, i).indexOf(str[i]) === -1) return strArgument[i]
  }
  return ""
}

function deleteOneChar(str, ind){
  return (str.slice(0, ind) + str.slice(ind + 1));
}