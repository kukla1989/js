let assert = require('assert')
let findMostFrequentlyUsedWords = require("../findMostFrequentlyUsedWords")

describe("findMostFrequentlyUsedWords", function (){

  function doTest(param, expected) {
    it(`in ("${param}") should find three ` +
    `most frequent word: [${expected}]`, function (){
      assert.deepEqual(findMostFrequentlyUsedWords.find(param), expected)

    })
  }
  doTest( "  , e   .. ", ["e"])
  doTest("Some teXt, or no. some or some or text or", [ 'or', 'some', 'text' ])
  doTest( "a a a  b  c c  d d d d  e e e e e", ["e", "d", "a"])
  doTest( ("wont won't won't "), ["won't", "wont"])
  doTest("  '  ", [])
  doTest(("  ...  "), [])
  doTest(`In a village of La Mancha, the name of which I have no desire to call to
  mind, there lived not long since one of those gentlemen that keep a lance
  in the lance-rack, an old buckler, a lean hack, and a greyhound for
    coursing. An olla of rather more beef than mutton, a salad on most
  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
  on Sundays, made away with three-quarters of his income.`, ["a", "of", "on"])
})
