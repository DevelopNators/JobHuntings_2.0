import React, { useState, useEffect } from 'react';
import './StripModal.css';

const StripModal = ({ setShowAdStrip, showStrip }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 3,
        minutes: 0,
        seconds: 30,
    });

    const handleClose = () => {
        setShowAdStrip(false);
    };

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimeLeft(prevTime => {
                const { days, hours, minutes, seconds } = prevTime;

                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(countdownInterval);
                    return prevTime;
                }

                if (seconds > 0) {
                    return { ...prevTime, seconds: seconds - 1 };
                } else if (minutes > 0) {
                    return { ...prevTime, minutes: minutes - 1, seconds: 59 };
                } else if (hours > 0) {
                    return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
                } else {
                    return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
            });
        }, 1000);
        return () => clearInterval(countdownInterval);
    }, []);
    

    return (
        showStrip && (
            <div className="strip-container fixed-top" style={{ opacity: showStrip ? 1 : 0 }}>
                <div className="strip-content">
                    <span className="strip-icon">⚡</span>
                    <span className="strip-sale-text">Enroll in Our Certified Course – 60% Off Flash Sale!</span>

                    <div className="strip-countdown">
                        <span>{timeLeft.days}</span> Days{' '}
                        <span>{timeLeft.hours}</span> Hours{' '}
                        <span>{timeLeft.minutes}</span> Mins{' '}
                        <span>{timeLeft.seconds}</span> Secs
                    </div>
                    <a target='_blank' href = "https://developnators.com/training/" >  <button className="strip-button">Get Certified</button> </a>
                   
                </div>
                <button className="strip-close-button" onClick={handleClose}>✕</button>
            </div>
        )
    );
};

export default StripModal;
