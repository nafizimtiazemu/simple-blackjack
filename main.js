let cards = []
let sum = 0
let hasBlackJack = false 
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let newCardEl = document.getElementById("newcard-el")

let player = {
  name: "Nafis",
  chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomCard = Math.floor(Math.random()*13) + 1
  if (randomCard === 1) {
    return 11
  } else if (randomCard > 10) {
    return 10
  } else {
    return randomCard
  }
    
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard,secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: "
  for (let i=0; i<cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  if (sum <= 20 ) {
  message = "Do you wanna draw a new card?"
  hasBlackJack = false
  } else if (sum === 21 ) {
  message = "You win!"
  hasBlackJack = true
  } else {
  message = "You lose!" 
  isAlive = false
  }

  messageEl.textContent = message
}

function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    let thirdCard = getRandomCard()
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
  }
}
