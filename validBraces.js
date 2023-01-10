//https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
//for test type npm test
exports.check = function validBraces1(braces){
  let start = [];
  let brace;

  for(let i = 0; i < braces.length; i ++){
    brace = braces[i];
    if(startOrEndBrace(brace)){
      start.push(brace);
    } else if (isOppositeBrace(start.at(-1), brace)) {
      start.pop();
    } else{
      return false;
    }
  }

  return start.length === 0;//if length > 0 then left braces that don"t closed
}

//if arguments ('[', ']') or ('{', '}') or ('(', ')') return true
function isOppositeBrace(startBrace, endBrace){
  switch (startBrace) {
    case "{":
      if (endBrace === "}") return true;
      break;
    case "[":
      if (endBrace === "]") return true;
      break;
    case "(":
      if (endBrace === ")") return true;
  }

  return false;
}

function startOrEndBrace(letter){
  return letter === "{" || letter === "[" || letter === "(";
}

/*
//another solution
function validBraces(braces){
  while (braces.indexOf("{}") !== -1 || braces.indexOf("[]") !== -1 ||
          braces.indexOf("()") !== -1){
    braces = braces.replace("{}", "").replace("[]", "").replace("()", "")
  }

  return braces.length === 0
}
 */