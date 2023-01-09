let assert = require('assert')
let findMissingLetter = require('../findMissingLetter')

describe("findMissingLetter", function (){

  it("in array ['a', 'c','d'] should return missing 'b'", function (){
    assert.equal(findMissingLetter.findMissingLetter(['a', 'c','d']), 'b')
  })

  it("in array ['O','Q','R', should return missing 'P'", function (){
    assert.equal(findMissingLetter.findMissingLetter(['O','Q','R','S']), 'P')
  })
})

