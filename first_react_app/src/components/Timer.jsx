// This component is a breathing timer. When clicked, it will display a message that says: "Get ready" and displays a 3 sec countdown timer, "Breathe in." and a 5 second countdown timer, "Hold" and a 3 second countdown timer, "Breathe out" and a 5 second countdown timer. Repeats breathe in breathe out 3x

import React, { useState, useEffect } from 'react';

export default function Timer() {

    const [seconds, setSeconds] = useState(5)
    const [displayMessage, setDisplayMessage] = useState(false)
    const [breatheIn, setBreatheIn] = useState(false)
    const [hold, setHold] = useState(true)
  
    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval)
            
            if (seconds <= 0 && hold === false){
                // console.log("Hold: false")
                // console.log("breatheIn: " + breatheIn)
                setDisplayMessage(!displayMessage)
                setHold(hold => !hold)
                
                let seconds = 5
                setSeconds(seconds)
            } else if (seconds <= 0 && hold === true){
                // console.log("Hold: true")
                // console.log("breatheIn: " + breatheIn)

                setDisplayMessage(!displayMessage)
                setBreatheIn(breatheIn => !breatheIn)
                setHold(hold => !hold)
                let seconds = 3
                setSeconds(seconds)
            } 
            else {
                
                setSeconds(seconds - 1)
            }
        }, 1000)
    }, [seconds])
    
    const timerSeconds = seconds < 10 ? `${seconds}` : seconds
        return (
            <div className="breathTimer">
                <div className="message" >
                        {displayMessage && <div className="hold">Hold</div>}
                        {!displayMessage && breatheIn && <div className="breathe" >Breathe In</div>}
                        {!displayMessage && !breatheIn && <div className="breathe">Breathe Out</div>}
                </div>
                <div className="timer">{timerSeconds}</div>
            </div>
        );
}

