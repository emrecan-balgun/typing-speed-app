import { useState } from 'react';
const SECONDS = 10;

function Timer() {
    const [countDown, setCountDown] = useState(SECONDS);

    function start() {
        let interval = setInterval(() => {
            setCountDown((prevCountDown) => {
                if(prevCountDown === 0) {
                    clearInterval(interval)
                } else {
                    return prevCountDown - 1
                }
            })
        }, 1000)
    }

    return (
        <div className="timer">
            <h1 className="timer__time">{countDown}</h1>
            <button className="timer__button" onClick={start}>Start</button>
        </div>
    )
}

export default Timer