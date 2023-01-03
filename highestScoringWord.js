
//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript
function high(x){
    let wordList = x.split(" ")
    wordList.reverse()
    let maxScore = 0
    let index = 0
    wordList.forEach((el, ind) => {
        if(scoreOfWord(el) >= maxScore){
            maxScore = scoreOfWord(el)
            index = ind
        }
    })
    return wordList[index]
}

function scoreOfWord(word){
    return word.split("").reduce((acc, el) => acc + el.charCodeAt(0) - 96, 0)
}

/*
//alternative solution
function high(x){
    let scores = x.split(" ").map((el) => [...el].reduce((acc, el) => acc + el.charCodeAt(0) - 96, 0))
    return x.split(" ")[scores.indexOf(Math.max(...scores))]
}
 */

console.log(high('man i need a taxi up to ubud') + " === taxi ?")
//console.log(high("a ab xy aab"))