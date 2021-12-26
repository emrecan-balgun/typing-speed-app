import { useState, useEffect } from "react";
import randomWords from 'random-words';

const NUMB_OF_WORDS = 200;

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

    function handleKeyDown({ keyCode }) {
        // space bar
        if(keyCode === 32) {
            checkMatch()
            setCurrentInput("")
            setCurrentWordIndex(currentWordIndex + 1)
        }
    }

    function checkMatch() {
        const wordToCompare = words[currentWordIndex];
        const doesItMatch = wordToCompare === currentInput.trim()
        console.log({doesItMatch})
    }

    return (
        <>
        <div className="generateText">
            <div className="generateText__text">
                {words.map((word, i) => (
                    <span key={i}>
                        <span>
                            {word.split("").map((char, idx) => (
                                <span key={idx}>{char}</span>
                            ))}
                        </span>
                        <span> </span>
                    </span>
                ))}
            </div>
        </div>
        <div className="enterText">
            <input
                type="text"
                className="enterText__input"
                onKeyDown={handleKeyDown}
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
            />
        </div>
        </>
    )
}

export default Text