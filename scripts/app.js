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
    puzzleEl.innerHTML = ''
    statusMessageEl.textContent = gameOne.statusMessage
    const letters = gameOne.puzzle.split('')
    letters.forEach(letter => {
        const letterEl = doc.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
    // gameOne.puzzle.charAt(0).toUpperCase() + gameOne.puzzle.slice(1)
}

const startGame = async () => {
    const puzzle = await getPuzzleFetch(1)
    gameOne = new Hangman(puzzle, 4)
    render()
}

doc.querySelector('#reset').addEventListener('click', startGame)

startGame()