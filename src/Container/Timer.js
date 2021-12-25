import { useState, useEffect } from 'react'
import ReactCountdownClock from 'react-countdown-clock';

function Timer() {
    return (
        <div className="timer">
            <ReactCountdownClock seconds={60}
                     color="#000"
                     alpha={0.9}
                     size={60} 
                    //  onComplete={handleCompleted} 
            />
        </div>
    )
}

export default Timer
