import React, { Component, useState } from 'react'

import h1 from './img/h1.svg'
import h2 from './img/h2.svg'
import h3 from './img/h3.svg'
import h4 from './img/h4.svg'
import h5 from './img/h5.svg'
import h6 from './img/h6.svg'
import h7 from './img/h7.svg'
import h8 from './img/h8.svg'

const images = [
    h1, h2, h3, h4, h5, h6, h7, h8
]

let game = {
    word: "javascript",

}

// thx!! https://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

class Hangman extends Component {

    state = {
        imgIndex: 1,
        hiddenWord: '_'.repeat(game.word.length)
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    nextImage = () => {
        this.setState({ imgIndex: this.state.imgIndex + 1 })
    }

    letters = [];

    handleKeyDown = (e) => {
        console.log('key pressed!')

        let pressedKey = e.key
        let check = game.word.search(pressedKey)

        if (check != -1) {
            for (let i = -1; i < game.word.length; i++) {
                if (game.word.charAt(i) == pressedKey) {
                    let index = i;
                    let hiddenWordProp = this.state.hiddenWord;

                    this.letters.push({ pressedKey, index })

                    this.letters.forEach(letter => {
                        hiddenWordProp = hiddenWordProp.replaceAt(letter.index, letter.pressedKey)
                    })

                    console.log('got it')
                    this.setState({ hiddenWord: hiddenWordProp })
                } else {

                }
            }

        } else {
            this.nextImage()
        }
    }

    render() {
        return (
            <>
                <div id="wordToGuess">{game.word}</div>
                <button onClick={this.nextImage}>next</button>

                <div id="hiddenWord">{this.state.hiddenWord}</div>
                <img src={images[this.state.imgIndex]}></img>
            </>
        )
    }

}
/*

const Hangman = () => {
    let [imgIndex, changeImgIndex] = useState(1)
    let [hiddenWord, changeHidden] = useState('_'.repeat(game.word.length))

    const nextImage = () => {
        changeImgIndex(imgIndex + 1)
    }

    let letters = [];

    document.addEventListener('keydown', (e) => {
        e.preventDefault()

        let pressedKey = e.key
        let check = game.word.search(pressedKey)

        console.log('elo')

        if (check != -1) {
            for (let i = -1; i < game.word.length; i++) {
                if (game.word.charAt(i) == pressedKey) {
                    let index = i;
                    let hiddenWordProp = hiddenWord;

                    letters.push({ pressedKey, index })

                    letters.forEach(letter => {
                        hiddenWordProp = hiddenWordProp.replaceAt(letter.index, letter.pressedKey)
                    })

                    changeHidden(hiddenWordProp)
                } else {

                }
            }

        } else {
            nextImage()
        }
    })

    return (
        <>
            
            <div id="wordToGuess">{game.word}</div>
            <button onClick={nextImage}>next</button>
            
            <div id="hiddenWord">{hiddenWord}</div>
            <img src={images[imgIndex]}></img>
        </>
    )

*/

export default Hangman