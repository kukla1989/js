let assert = require("assert")
let firstNonRepeatingCharacter = require("../firstNonRepeatingCharacter")

describe("firstNonRepeatingCharacter", function (){
  function doTest(param, expected){
    it(`in "${param}" should find first non repeated character ` +
     `- "${expected}"`, function (){
      assert.equal(firstNonRepeatingCharacter.find(param), expected)
    })
  }

  doTest(("stress"), "t");
  doTest("moonmen", "e");
  doTest("a", "a");
  doTest("persis", "p")
})