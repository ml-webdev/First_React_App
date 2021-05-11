// This component is a breathing timer. When clicked, it will display a message that says: "Get ready" and displays a 3 sec countdown timer, "Breathe in." and a 5 second countdown timer, "Hold" and a 3 second countdown timer, "Breathe out" and a 5 second countdown timer. Repeats breathe in breathe out 3x

import React, { useState, useEffect } from 'react';

export default function Timer() {

    const [seconds, setSeconds] = useState(5)
    const [displayMessage, setDisplayMessage] = useState(false)
    const [breatheIn, setBreatheIn] = useState(false)
    const switchBreath = () => {
        setBreatheIn(!breatheIn)
    }
    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval)
            
            if (seconds <= 1){
                setDisplayMessage(!displayMessage)
                
                let seconds = 5
                
                setSeconds(seconds)
            } else {
                
                setSeconds(seconds - 1)
            }
        }, 1000)
        switchBreath()
    }, [seconds])
    
    const timerSeconds = seconds < 10 ? `${seconds}` : seconds
        return (
            <div className="pomodoro">
                <div className="message">
                        {displayMessage && <div className="hold">Hold</div>}
                        {!displayMessage && breatheIn && <div className="breathe">Breathe In</div>}
                        {!displayMessage && !breatheIn && <div className="breathe">Breathe Out</div>}
                </div>
                <div className="timer">{timerSeconds}</div>
            </div>
        );
}

