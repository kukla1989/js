//Want to play a round?
// Do you want to draw a new card?
//   You've got Blackjack!
//  You're out of the game!
let cardsPar = document.getElementById("cards-el")
let sumPar = document.getElementById("sum-el")
let msgPar = document.getElementById("message-el")
let moneySpan = document.getElementById("money-el")
let alive = false
let cards = []
let sum = 0
let money = 200

function startGame(){
    if (money > 0) {
        alive = true
        cards = getTwoRandomCards()
        cardsPar.textContent = 'Cards: ' + cards
        msgPar.textContent = "Do you want to draw a new card?"
        sumPar.textContent = "Sum: " + cards.reduce((acc, el) => acc + el)
    }
}

function newCard(){
    if (alive) {
        cards.push(getRandomIntInRange(2, 11))
        checkCards()
    }
    cardsPar.textContent = "Cards: " + cards
}

function checkCards(){
    sum = cards.reduce((acc, el) => acc + el)
    sumPar.textContent = "Sum: " + sum
    if (sum > 21) {
        alive = false
        msgPar.textContent = "You're out of the game!"
        money -= 20
        moneySpan.textContent = money
        if (money <= 0)  {
            msgPar.textContent += " you are out of money pls refill!"
            money = 0
            moneySpan.textContent = money
        }
    } else if (sum === 21) {
        msgPar.textContent = "You've got Blackjack!"
        money += 60
        alive = false
        moneySpan.textContent = money
    }
}

function getTwoRandomCards(){
    return [getRandomIntInRange(2, 11), getRandomIntInRange(2, 11)]
}

function getRandomIntInRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

