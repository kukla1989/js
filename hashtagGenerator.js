//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
function generateHashtag (str) {
  str = str.trim()
  if(str == ""){
    return false
  }
  let result = "#" + (str.split(/\s+/).map((el) =>
                  el[0].toUpperCase() + el.slice(1)).join(""))

  if (result.length > 140) {
    return  false
  }
  return result
}


debugger
console.log(generateHashtag("Do we have A Hashtag"))
console.log(generateHashtag("Codewars"))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
