'use strict'

const puzzleEl = document.querySelector('#puzzle')
const statusMessageEl = document.querySelector('#statusMessage')
let gameOne

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = gameOne.puzzle.charAt(0).toUpperCase() + gameOne.puzzle.slice(1)
    statusMessageEl.textContent = gameOne.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzleFetch(2)
    gameOne = new Hangman(puzzle, 4)
    render()
}

doc.querySelector('#reset').addEventListener('click', startGame)

startGame()