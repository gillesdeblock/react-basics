import { useEffect, useRef, useState } from "react";

function CountdownTimer() {
    const {
        seconds,
        isCountingDown,
        setInitialSeconds,
        start,
        stop,
    } = useCountdown(60);

    return (
        <div className="flex flex-column self-start">
            <div className="flex gap-2">
                <CountdownTimerInput seconds={seconds} disabled={isCountingDown} onInput={setInitialSeconds}></CountdownTimerInput>
                {!isCountingDown && <CountdownTimerButton disabled={seconds <= 0} onClick={start}>Start</CountdownTimerButton>}
                {isCountingDown && <CountdownTimerButton onClick={stop}>Stop</CountdownTimerButton>}
            </div>
        </div>
    )
}

function useCountdown(initial = 60) {
    const initialSeconds = useRef(initial);
    const intervalID = useRef(null);

    const [seconds, setSeconds] = useState(initialSeconds.current);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const isFinished = seconds === 0;

    const start = () => setIsCountingDown(true);
    const stop = () => {
        setIsCountingDown(false);
        setSeconds(initialSeconds.current);
    };
    const setInitialSeconds = (e) => {
        const { value } = e.target;
        initialSeconds.current = value;
        setSeconds(value);
    };

    useEffect(() => {
        if (isCountingDown) {
            intervalID.current = setInterval(() => setSeconds(s => s - 1), 1000);
        }
        return () => clearInterval(intervalID.current);
    }, [isCountingDown])

    useEffect(() => {
        clearInterval(intervalID.current);
    }, [isFinished]);

    return { seconds, isCountingDown, start, stop, setInitialSeconds };
}

function CountdownTimerInput({ seconds, disabled, onInput }) {
    return (
        <input
            type="number"
            className="outline-none px-2 py-1 border bg-transparent"
            value={seconds}
            onInput={onInput}
            min={1}
            disabled={disabled}
        />
    );
}

function CountdownTimerButton({ disabled, onClick, children }) {
    return <button
        className="border px-2 py-1 hover:bg-gray-50 active:focus:bg-gray-100 disabled:bg-gray-100"
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </button>
}

export default CountdownTimer;