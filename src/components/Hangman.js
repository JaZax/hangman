import React, { Component, useState } from 'react'

import h1 from './img/h1.svg'
import h2 from './img/h2.svg'
import h3 from './img/h3.svg'
import h4 from './img/h4.svg'
import h5 from './img/h5.svg'
import h6 from './img/h6.svg'
import h7 from './img/h7.svg'
import h8 from './img/h8.svg'
import h9 from './img/h9.svg'

// thx!! https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const images = [
    h1, h2, h3, h4, h5, h6, h7, h8, h9
]

let game = {
    word: "javascript", //  API
    over: false,
    win: false,
}

class Hangman extends Component {

    state = {
        imgIndex: 0,
        hiddenWord: '_'.repeat(game.word.length)
    }

    minusLife = () => {
        if (this.state.imgIndex < 7) {
            this.setState({ imgIndex: this.state.imgIndex + 1 })
        } else {
            game.over = true
            this.setState({ imgIndex: 8 })
        }
    }

    restart = () => {
        this.setState({ imgIndex: 0, hiddenWord: '_'.repeat(game.word.length) })
        // game.word  API
        game.over = false
        game.win = false
        this.letters = [];
        this.guessedLetters = [];
    }

    letters = [];
    guessedLetters = [];

    handleKeyDown = (e) => {
        if (game.over == false && game.win == false) {
            let pressedKey = e.key
            let check = game.word.search(pressedKey)

            if (check != -1) {
                if (!this.guessedLetters.includes(pressedKey)) {
                    this.guessedLetters.push(pressedKey)
                } else {
                    this.minusLife()
                }

                for (let i = -1; i < game.word.length; i++) {
                    if (game.word.charAt(i) == pressedKey) {
                        let index = i;
                        let hiddenWordProp = this.state.hiddenWord;

                        this.letters.push({ pressedKey, index })

                        this.letters.forEach(letter => {
                            hiddenWordProp = hiddenWordProp.replaceAt(letter.index, letter.pressedKey)
                        })
                        this.setState({ hiddenWord: hiddenWordProp })

                        if (hiddenWordProp == game.word) {
                            game.win = true
                        }
                    }
                }

            } else {
                this.minusLife()
            }
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return (
            <>
                {/* <div id="wordToGuess">{game.word}</div>
                <button onClick={this.nextImage}>next</button> */}

                <img src={images[this.state.imgIndex]}></img>
                <div id="rightWrap">
                    <div className="inWrap" id="hiddenWord">{game.over ? game.word : this.state.hiddenWord}</div>
                    <div className={game.over ? 'inWrap' : 'hidden'} id="btn" onClick={this.restart}>{game.over ? 'restart' : ''} </div>
                    <div className={this.state.hiddenWord == game.word ? 'inWrap' : 'hidden'} id="btn" onClick={this.restart}>{this.state.hiddenWord == game.word ? 'next word' : ''}</div>
                </div>

            </>
        )
    }

}

export default Hangman