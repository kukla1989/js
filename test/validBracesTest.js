let assert = require("assert");
let validBraces = require("../validBraces");

describe("validBraces",function (){

  function doTest(param, expected){
    it(`validBraces("${param}" should return: ${expected}`, function (){
      assert.equal(validBraces.check(param), expected);
    })
  }

  doTest("()))", false);
  doTest("()", true);
  doTest("[]", true);
  doTest("{}", true);
  doTest("(){}[]", true);
  doTest("([{}])", true);
  doTest("(}", false);
  doTest("[(])", false);
  doTest("({})[({})]", true);
  doTest("(})", false);
  doTest("(({{[[]]}}))", true);
  doTest("{}({})[]", true);
  doTest(")(}{][", false);
  doTest("())({}}{()][][", false);
  doTest("(((({{", false);
  doTest("}}]]))}])", false);
})