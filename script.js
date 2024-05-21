// Player object with name and chips properties
let player = {
    name: "Halleluya",
    chips: 400
}

// Array to hold the cards in hand
let cards = []
// Sum of the card values in hand
let sum = 0
// Boolean to check if the player has Blackjack
let hasBlackJack = false
// Boolean to check if the player is still in the game
let isAlive = false
// Message to display the current game status
let message = ""
// DOM element references for displaying messages, sum, cards, and player info
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// Display player name and chips
playerEl.textContent = `${player.name}: $${player.chips}`

// Function to get a random card value between 1 and 11
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    // Cards 11, 12, and 13 should be counted as 10
    if (randomNumber > 10) {
        return 10
    // Ace (1) should be counted as 11
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// Function to start the game
function startGame() {
    isAlive = true
    // Draw two random cards to start the game
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    // Initialize cards array and sum
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Render the game status
    renderGame()
}

// Function to render the game status
function renderGame() {
    // Display the cards in hand
    cardsEl.textContent = "Cards: " + cards.join(" ")
    // Display the sum of card values
    sumEl.textContent = "Sum: " + sum
    // Determine the game status based on the sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // Display the message
    messageEl.textContent = message
}

// Function to draw a new card
function newCard() {
    // Only allow drawing a new card if player is alive and doesn't have Blackjack
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        // Add the new card to the cards array and update the sum
        sum += card
        cards.push(card)
        // Render the updated game status
        renderGame()        
    }
}