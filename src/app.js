// Importing the helpers.js
import { log, doc, animateCSS } from './helpers';
// Importing the reequest.js
import getPuzzleFetch from './requests'
// Importing the hangaman.js
import Hangman from './hangman'

// Element target for animationCss and typeItJs
const title = doc.querySelector('.title');
const subParagraph = doc.querySelector('.sub-paragraph');
const paragraph = doc.querySelector('.paragraph');
let puzzle = doc.querySelector('.puzzle');
const statusMessage = doc.querySelector('.statusMessage');
const resetButton = doc.querySelector('.reset-button');


// Animation Css
animateCSS(title, 'fadeIn', 'delay-1s')
animateCSS(subParagraph, 'fadeIn', 'delay-2s')
animateCSS(paragraph, 'fadeIn', 'delay-3s')
animateCSS(puzzle, 'fadeIn', 'delay-3s')
animateCSS(statusMessage, 'fadeIn', 'delay-4s')
animateCSS(resetButton, 'fadeIn', 'delay-5s')


const puzzleEl = doc.querySelector('#puzzle')
const statusMessageEl = doc.querySelector('#statusMessage')
let gameOne

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    gameOne.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    const message = statusMessageEl.textContent = gameOne.statusMessage
    log(message)
    
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
    gameOne = new Hangman(puzzle, 10)
    log(gameOne.word.join(''))
    render()
}

doc.querySelector('#reset').addEventListener('click', (e) => {
    startGame();
    animateCSS(puzzleEl, "flipInX");

    new TypeIt('.new-paragraph', {
      strings: `Let's see how good you are this time...`,
      speed: 85,
      loop: false,
      lifeLike: true,
      waitUntilVisible: true,
      cursor: false
    }).pause(2500).delete().go();
})

startGame()

setTimeout(() => {
    new TypeIt('.paragraph', {
      speed: 85,
      loop: false,
      waitUntilVisible: true,
      cursor: false
    }).go();
}, 3000)