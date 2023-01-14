//https://www.codewars.com/kata/55d5da66a0e378b8bc0000c6/train/javascript
exports.find = function getCharacters(obj, key, value){
  return obj.characters.filter(function (obj){
    if (typeof obj[key] === "string") {
      return (obj[key].toLowerCase() === value.toLowerCase());
    }
  })
}



