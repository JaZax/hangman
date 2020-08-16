import React from 'react'
import ReactDOM from 'react-dom'
import { gsap } from 'gsap'

import './style.scss'
import Hangman from './components/Hangman'

const App = () => {

    return (
        <Hangman />
    )
}

ReactDOM.render(<App />, document.getElementById('App'))