'use client'
import React, {useEffect, useState} from 'react';

let destDate:Date = new Date(2024, 5, 13, 10)

type time = {
    days:number,
    hours:number,
    minutes:number,
    seconds:number,
}

const Timer = () => {
    const calculateTimeRemaining:Function = ():time => {
        const currentTime = new Date().getTime();
        const timeDifference = destDate.getTime() - currentTime;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeRemaining, setTimeRemaining] = useState<time>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        setTimeRemaining(calculateTimeRemaining());
        const timer:NodeJS.Timeout = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={"py-5 relative w-[650px] grid grid-cols-4 content-between items-center"}>
            <div className={"text-white flex items-end mr-5"}>
                <p className={"font-bold text-timer-num uppercase text-center mr-[5px]"}>{timeRemaining.days}</p>
                <p className={"uppercase text-center mr-[5px]"}>DAYS</p>
            </div>
            <div className={"text-white flex items-end mr-5"}>
                <p className={"text-timer-num uppercase text-center mr-[5px]"}>{timeRemaining.hours}</p>
                <p className={"uppercase text-center mr-[5px]"}>Hours</p>
            </div>
            <div className={"text-white flex items-end mr-5"}>
                <p className={"text-timer-num uppercase text-center mr-[5px]"}>{timeRemaining.minutes}</p>
                <p className={"uppercase text-center mr-[5px]"}>minutes</p>
            </div>
            <div className={"text-white flex items-end mr-5"}>
                <p className={"text-timer-num uppercase text-center mr-[5px]"}>{timeRemaining.seconds}</p>
                <p className={"uppercase text-center mr-[5px]"}>seconds</p>
            </div>
        </div>
    );
};

export default Timer;