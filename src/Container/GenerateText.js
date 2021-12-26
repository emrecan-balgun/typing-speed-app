import { useState, useEffect } from "react";
import randomWords from 'random-words';

const NUMB_OF_WORDS = 200;

function GenerateText() {
    const [words, setWords] = useState([])

    useEffect(() => {
        setWords(generateWords())
    }, [])

    function generateWords() {
        return new Array(NUMB_OF_WORDS).fill(null).map(() => randomWords())
    }

    return (
        <div className="generateText">
            <div className="generateText__text">
                {words.map((word, i) => (
                    <>
                        <span>
                            {word}
                        </span>
                        <span> </span>
                    </>
                ))}
            </div>
        </div>
    )
}

export default GenerateText
