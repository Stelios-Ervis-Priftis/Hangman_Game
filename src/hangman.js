// Importing the helpers.js
import { log, doc } from "./helpers";

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.nonExistingLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            // const message = `Guesses left: ${this.remainingGuesses}`
            // const remainingGuesses = this.remainingGuesses
            // return {
            //     message, 
            //     remainingGuesses
            // }
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was ${this.word.join('').charAt(0).toUpperCase() + this.word.join('').slice(1)}`
        } else {
            return 'Great work! You guessed the word.'
        }
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle = puzzle + letter
            } else {
                puzzle = puzzle + '*'
            }
        })

        return puzzle        
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.nonExistingLetters.push(guess)
            this.remainingGuesses--
        }
        this.calculateStatus()
    }
    nonGuessedLetters() {
        let message
        const letters = this.nonExistingLetters

        letters.forEach(letter => {
            message = `Wrong guessed letters [${letter}]`
            // const nonExistLetters = doc.querySelector('.non-exist-letters')
            // nonExistLetters.textContent =
        });

        return message
    }
}

export { Hangman as default }