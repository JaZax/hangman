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
    word: "testword",
    hiddenWord: ''
}

const Hangman = () => {

    game.hiddenWord = '_ '.repeat(game.word.length)

    let [imgIndex, changeImgIndex] = useState(1)

    const nextImage = () => {
        changeImgIndex(imgIndex + 1)
    }

    document.addEventListener('keydown', (e) => {
        let pressedKey = e.key
        let check = game.word.search(pressedKey)

        if (check != -1) {

            console.log(game.hiddenWord)

            for (let i = 0; i < game.word.length; i++) {
                if (game.word.charAt(i) == pressedKey) {
                    let letterPosition = i
                    console.log('letter at ' + letterPosition)
                } else {
                    continue
                }
            }

        } else {
            nextImage()
        }
    })

    return (
        <>
            <div id="wordToGuess">{game.word}</div>
            <div id="hiddenWord">{game.hiddenWord}</div>
            <button onClick={nextImage}>next</button>
            <img src={images[imgIndex]}></img>
        </>
    )

}

export default Hangman