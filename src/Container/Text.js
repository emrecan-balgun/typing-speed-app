import { useState, useEffect, useRef } from "react";
import randomWords from 'random-words';

const NUMB_OF_WORDS = 200;
const SECONDS = 10;

function Text() {
    // generateText
    const [words, setWords] = useState([])

    useEffect(() => {
        setWords(generateWords())
    }, [])

    function generateWords() {
        return new Array(NUMB_OF_WORDS).fill(null).map(() => randomWords())
    }

    // enterText
    const [currentInput, setCurrentInput] = useState("");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(-1);
    const [currentChar, setCurrentChar] = useState("");
    const textInput = useRef(null);

    function handleKeyDown({ keyCode, key }) {
        // space bar
        if(keyCode === 32) {
            checkMatch()
            setCurrentInput("")
            setCurrentWordIndex(currentWordIndex + 1)
            setCurrentCharIndex(-1)
        } // backspace
        else if ( keyCode === 8 ) {
            setCurrentCharIndex(currentCharIndex)
            setCurrentChar("")
        } else {
            setCurrentCharIndex(currentCharIndex + 1)
            setCurrentChar(key)
        }
    }

    function checkMatch() {
        const wordToCompare = words[currentWordIndex];
        const doesItMatch = wordToCompare === currentInput.trim()
        if(doesItMatch) {
            setCorrect(correct + 1)
        } else {
            setInCorrect(inCorrect + 1)
        }
    }

    function getCharClass(wordIdx, charIdx, char) {
        if(wordIdx === currentWordIndex && charIdx === currentCharIndex && currentChar && status !== "finished") {
            if(char === currentChar) {
                return "generateText__text__success"
            } else {
                return "generateText__text__danger"
            }
        } else if( wordIdx === currentWordIndex && currentCharIndex >= words[currentWordIndex].length) {
            return "generateText__text__danger"
        } else {
            return ""
        }
    }


    // result
    const [correct, setCorrect] = useState(0);
    const [inCorrect, setInCorrect] = useState(0);

    // timer
    const [countDown, setCountDown] = useState(SECONDS);
    const [status, setStatus] = useState("waiting");

    function start() {
        if(status === "finished") {
            setWords(generateWords())
            setCurrentWordIndex(0)
            setCorrect(0)
            setInCorrect(0)
            setCurrentCharIndex(-1)
            setCurrentChar("")
        }

        if(status !== "started") {
            setStatus("started")
            let interval = setInterval(() => {
                setCountDown((prevCountDown) => {
                    if(prevCountDown === 0) {
                        clearInterval(interval)
                        setStatus("finished")
                        setCurrentInput("")
                        return SECONDS
                    } else {
                        return prevCountDown - 1
                    }
                })
            }, 1000)
        }
    }

    useEffect(() => {
        if(status === "started") {
            textInput.current.focus()
        }
    }, [status])


    return (
        <>
        <div className="timer">
            <h1 className="timer__time">{countDown}</h1>
            <button className="timer__button" onClick={start}>Start</button>
        </div>
        {status !== "finished" && (
            <div className="enterText">
            <input
                type="text"
                className="enterText__input"
                ref={textInput}
                onKeyDown={handleKeyDown}
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                disabled={status !== "started"}
            />
        </div>
        )}
        
        {status === "started" && (
            <div className="generateText">
                <div className="generateText__text">
                    {words.map((word, i) => (
                        <span key={i}>
                            <span>
                                {word.split("").map((char, idx) => (
                                    <span
                                    className={getCharClass(i, idx, char)}
                                    key={idx}>
                                        {char}
                                    </span>
                                ))}
                            </span>
                            <span> </span>
                        </span>
                    ))}
                </div>
            </div>
        )}
        {status === "finished" && (
            <div className="modal">
                <p className="modal__correct">Correct: {correct}</p>
                <p className="modal__accuary">Accuary: {Math.round((correct / (correct + inCorrect)) * 100 )}%</p>
            </div>
        )}
        </>
    )
}

export default Text