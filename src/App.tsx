import React, { useEffect, useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import logo from './logo.svg';
import './App.css';
import HangmanCanvas from './HangmanCanvas';
import Trashbin from './Trashbin';

function App() {
  const [guessed, setGuessed] = useState<string | null>(null)
  const [guessString, setGuessString] = useState<string>('')
  const [words,setWords] = useState<String[] | null>(null)
  const [word, setWord] = useState<String | null>(null)
  
  const layout = {
    default: ['Q W E R T Y U I O P', 'A S D F G H J K L', '{shift} Z X C V B N M {backspace}', '{enter}'],
    shift: ['q w e r t y u i o p', 'a s d f g h j k l', '{shiftactivated} z x c v b n m {backspace}', '{enter}']
  };

  const keyboardOptions = {
    layoutName: 'default',
    display: {
      '{shift}': '⇧',
      '{shiftactivated}': '⇧',
      '{enter}': 'Enter',
      '{backspace}': '⌫',
      '{numbers}': '123',
      '{space}': ' ',
    },
  };

  const handleKeyClick = (button: string) => {
    console.log(`button here is ${button}`)
    // setGuessed(button)
    setGuessString(button)
  }

  const handleGuessClick = (input: string) => {
    if(input === "{enter}"){
      console.log(`enter btn clicked`)
      if(word && guessString)
      setGuessed(guessString)
      if(guessed?.toLowerCase() === word!.toLowerCase()){
        console.log(`Correct Guess!!`)
      }
      else{
        console.log(`guess: ${guessed} word:${word}`)
        console.log(`Incorrect Guess!!`)
      }
    }
  }

  useEffect(() => {
    let words = ['hello']

    if(word)
    word.split("").map((letter) => {
      console.log(`letter: ${letter}`)
    })

    guessed?.split("").map((letter) => {
      console.log(`guess: ${letter}`)
    })
    
    // setWords(words)
    setWord("Hello")

    
  },[guessed])

  return (
    <div className="App">
      <h1 className='hangman-title'>Hangman Game</h1>
      <HangmanCanvas />
      {word && <div className='word-container'>
        {word.split("").map(letter => (
          (letter.toLowerCase() === guessed?.toLowerCase()) ? (
            <p className='correct-guess-container'>{guessed}</p>
          ) : (
            <p className='incorrect-guess-container'>_</p>
          )
        ))}
        </div>}
      {guessString && <p className='guess-container'>{guessString}</p>}
      <Keyboard
        buttonTheme={[{class: 'enter-btn', buttons: '{enter}'}]}
        onChange={handleKeyClick}
        layout={layout}
        display={keyboardOptions.display}
        layoutName={keyboardOptions.layoutName}
        onKeyPress={handleGuessClick}
      />
    </div>
  );
}

export default App;



// {words && <div className='word-container'>
// {/* {<p></p>} */}
// {word.split("").map((word) => {
//   return <p>{}</p>
// })}
// </div>}