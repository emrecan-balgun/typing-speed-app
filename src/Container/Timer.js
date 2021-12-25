import React, { useEffect } from "react";
import useCountDown from "react-countdown-hook";
import { useSelector } from 'react-redux';
import { seconds } from '../app/typingSlice';

function Timer() {
    const time = useSelector(seconds);
    const [timeLeft, actions] = useCountDown(time, 100);

    useEffect(() => {
        actions.start();
    }, [time])

    return (
        <div className="timer">
            <h1>{(timeLeft / 1000).toFixed(2)}</h1>
        </div>
    )
}

export default Timer