const assert = require("assert")
const findObjByKeyValueInAnyObj = require("../findObjByKeyValueInAnyObj")
const _ = require("lodash")

describe("findObjByKeyValueInAnyObj()", function (){
  let findObj = new findObjByKeyValueInAnyObj.FindObj()

  function doTest(inputData, find, expected){
    it( `with inputData: ${JSON.stringify(inputData)}} \n should seek objects` +
    `with {${find[0]}: "${find[1]}}" and find: \n ${JSON.stringify(expected)}`, function () {
      assert.ok(_.isEqual(findObj.seek(inputData, find), expected))
    });
  }

  doTest({a: "asdf", b: {findMe: "findMe"}},          ["findMe", "findMe"], [{findMe: "findMe"}])
  doTest({a: "asdf", b: {findMe: "not right value"}}, ["findMe", "findMe"], [])
  doTest({a: "asdf", findMe: "findVal"},              ["findMe", "findVal"], [ {a: "asdf", findMe: "findVal"}])
  doTest({a: "asdf", findMe: {someKey: "not", sd:{findMe: "findVal"}}},               ["findMe", "findVal"], [ {findMe: "findVal"}])
  doTest({a: "asdf", sd:{findMe: "findVal", c: "cc"}, findMe: {someKey: "not", sd:{findMe: "findVal"}}},
    ["findMe", "findVal"], [ {findMe: "findVal", c: "cc"}, {findMe: "findVal"}])
})


