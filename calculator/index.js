let switchNum = true // switch first or second number user enters
let num1Input = document.getElementById("num1-el")
let num2Input = document.getElementById("num2-el")
let resaltSpan = document.getElementById("res-el")
let result

function calculate(operator) {
  let num1 = Number(num1Input.value)
  let num2 = Number(num2Input.value)

  switch (operator){
    case '+':
      result = num1 + num2
      resaltSpan.innerText = "Result: " + result
      break
    case '-':
      result = num1 - num2
      resaltSpan.innerText = "Result: " + result
      break
    case '*':
      result = num1 * num2
      resaltSpan.innerText = "Result: " + result
      break
    case '/':
      if (num2  !== 0) {
        result = num1 / num2
        resaltSpan.innerText = "Result: " + result
      } else {
        resaltSpan.textContent = "Result: you cant divide on zero!"
      }
        break
  }
}

function chooseNum(which){
  if (which){
    switchNum = true
    num1Input.style.background = "#777"
    num2Input.style.background = "white"
  } else {
    switchNum = false
    num2Input.style.background = "#777"
    num1Input.style.background = "white"
  }
}

function pressNum(number){
  switchNum ? num1Input.value += number : num2Input.value += number
}
