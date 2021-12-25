import { useEffect } from "react";
import useCountDown from "react-countdown-hook";
import { useSelector } from 'react-redux';
import { text } from '../app/typingSlice';

function Timer() {
    const userText = useSelector(text);

    const initialTime = 60 * 1000; // initial time in milliseconds, defaults to 60000
    const interval = 1000; // interval to change remaining time amount, defaults to 1000

    const [timeLeft, { start }] = useCountDown(initialTime, interval);

    useEffect(() => {
        if(document.getElementById("enterText")) {
            let deneme = document.getElementById("enterText");
            if(deneme === document.activeElement) {
                start();
            }
        }
    }, [userText])

    function restart() {
        const newTime = 60 * 1000;
        start(newTime);
    }

    return (
        <div className="timer">
            <h1 className="timer__time">{(timeLeft / 1000)}</h1>
            <button className="timer__button" onClick={() => restart()}>Reset</button>
        </div>
    )
}

export default Timer