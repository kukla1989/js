   //https://www.codewars.com/kata/5839edaa6754d6fec10000a2
    function findMissingLetter(array) {
        for(const el of array){
            if(array[array.indexOf(el) + 1].charCodeAt(0) - el.charCodeAt(0) === 2) {
                return String.fromCharCode(el.charCodeAt(0) + 1)
            }
        }
    }
console.log(findMissingLetter(['a', 'c','d']) + " - should return b ")