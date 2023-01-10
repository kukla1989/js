//Most frequently used words in a text(first three)
//https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/ruby
exports.find = function topThreeWords(str){
  let words = stringToWords(str)
  let wordsFrequency = findWordsFrequency(words)

  let wordsFrequencyArr = []// wordsFrequency is object lets transform it to array
  for(const word in wordsFrequency){
    wordsFrequencyArr.push([word, wordsFrequency[word]])
  }
  wordsFrequencyArr.sort( (a, b) =>  b[1] - a[1])
  if(wordsFrequencyArr.length >= 3) {
    return [wordsFrequencyArr[0][0], wordsFrequencyArr[1][0], wordsFrequencyArr[2][0]]
  } else if (wordsFrequencyArr.length === 2) {
    return [wordsFrequencyArr[0][0], wordsFrequencyArr[1][0]]
  } else if (wordsFrequencyArr.length === 1) {
    return [wordsFrequencyArr[0][0]]
  }
  return []
}

function findWordsFrequency(words){
  let wordsFrequency = {}
  words.forEach(word => {
    if (isNaN(wordsFrequency[word])) {
      wordsFrequency[word] = 1
    } else {
      wordsFrequency[word] += 1
    }
  })

  return wordsFrequency
}

//slice trailing sign in end of words and lowercase, for example:
//param:  "First Sentence." return: ["first", "sentence"]
function stringToWords(str){
  let words = str.split(" ")
  words = words.filter(word => word !== "" && word.match(/[a-z]/i))
  words = words.map(word => {
    word = word.toLowerCase()
    if(!word.slice(-1).match(/[a-z]/i)) {
      return word.slice(0, -1)
    }
    return word
  })

  return words
}


//console.log(this.get("Some teXt, or no. some or some or text or"))


//console.log( this.find("  , e   .. ")) // "e"
/*
console.log( topThreeWords("a a a  b  c c  d d d d  e e e e e"))
console.log( ["e", "d", "a"])

 */