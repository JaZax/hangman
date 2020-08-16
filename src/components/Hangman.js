import React, { Component, useState } from 'react'

import h1 from './img/h1.svg'
import h2 from './img/h2.svg'
import h3 from './img/h3.svg'
import h4 from './img/h4.svg'
import h5 from './img/h5.svg'
import h6 from './img/h6.svg'
import h7 from './img/h7.svg'
import h8 from './img/h8.svg'

const Hangman = () => {
    let [imgIndex, changeImgIndex] = useState(1)
    const images = [
        h1, h2, h3, h4, h5, h6, h7, h8
    ]

    const nextImage = () => {
        changeImgIndex(imgIndex + 1)

    }

    return (
        <>
            <button onClick={nextImage}>next</button>
            <img src={images[imgIndex]}></img>
        </>
    )

}

export default Hangman