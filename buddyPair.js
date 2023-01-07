//https://www.codewars.com/kata/59ccf051dcc4050f7800008f

//finds sum of all divisors for number
function findSumDivisors(numb){
    let result = [1]
    for(let i = 2; i < numb; i ++){
        if(numb % i === 0) {
            result.push(i)
        }
    }
    return result.reduce((acc, el) => acc + el, 0)
}

function findSumsDivisorsOnRange(start, limit){
    let result = []
    for(let i = start; i <= limit; i++){
        result.push(findSumDivisors(i))
    }
    return result
}

function buddy(start,limit) {
    let sumsDivisorsOnRange = findSumsDivisorsOnRange(start, limit)
    let result = findBuddyPairOnRange(sumsDivisorsOnRange, start, limit)
    if(result !== undefined) {return result}
    sumsDivisorsOnRange = findSumsDivisorsOnRange(start, limit + 2000)
    for(let i = start; i <= limit; i++){
        for(let j = limit + 1; j <= limit + 2000; j++){
            if((sumsDivisorsOnRange[i - start] - 1 === j) && (sumsDivisorsOnRange[j - start] - 1 === i)){
                return [i, j]
            }
        }
    }
   return "Nothing";
}

function findBuddyPairOnRange(sums,start, limit){
    let output
    for(let i = start; i <= limit; i++){
        for(let j = i; j <= limit; j++){
            if((sums[i - start] - 1 === j) && (sums[j - start] - 1 === i)){
                output = [i, j]
            }
        }
    }
    return output
}

//console.log(buddy(4952, 6539) + " === 5775, 6128")
console.log(buddy(10, 50) + " should return:  [48, 75] ")
console.log(buddy(48, 50) + " should return:  [48, 75] ")
console.log(buddy( 4952, 6539) + " should return:  [5775, 6128] ")
//buddy(48, 50) returns [48, 75]


