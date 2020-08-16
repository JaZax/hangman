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

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const Hangman = () => {
    let [imgIndex, changeImgIndex] = useState(1)
    let [hiddenWord, changeHidden] = useState('_'.repeat(game.word.length))

    const nextImage = () => {
        changeImgIndex(imgIndex + 1)
    }

    let letters = [];

    document.addEventListener('keydown', (e) => {
        let pressedKey = e.key
        let check = game.word.search(pressedKey)

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
            <div id="hiddenWord">{hiddenWord}</div>
            <button onClick={nextImage}>next</button>
            <img src={images[imgIndex]}></img>
        </>
    )

}

export default Hangman