import { useEffect, useRef, useState } from "react";

function CountdownTimer() {
    const initialSeconds = useRef(60);
    const intervalID = useRef(null);

    const [seconds, setSeconds] = useState(initialSeconds.current);
    const [isCountingDown, setIsCountingDown] = useState(false);

    const start = () => setIsCountingDown(true);
    const stop = () => setIsCountingDown(false);
    const reset = () => setSeconds(initialSeconds.current);

    const onInput = (e) => {
        const { value } = e.target;
        setSeconds(value);
        initialSeconds.current = value;
    };

    useEffect(() => {
        if (isCountingDown) {
            intervalID.current = setInterval(() => setSeconds(s => s - 1), 1000);
        }
        return () => clearInterval(intervalID.current);
    }, [isCountingDown])

    useEffect(() => {
        clearInterval(intervalID.current);
    }, [seconds === 0]);

    return (
        <div className="flex flex-column self-start">
            <div className="flex gap-2">
                <input
                    type="number"
                    className="outline-none px-2 py-1 border bg-transparent"
                    value={seconds}
                    onInput={onInput}
                    min={1}
                    disabled={isCountingDown}
                />
                {
                    !isCountingDown && <div className="flex gap-2">
                        <button className="border px-2 py-1 hover:bg-gray-50 disabled:bg-gray-100" disabled={!(seconds > 0)} onClick={start}>Start</button>
                        {
                            (initialSeconds.current !== seconds) && <button className="border px-2 py-1 hover:bg-gray-50" onClick={reset}>Reset ({initialSeconds.current})</button>
                        }
                    </div>
                }
                {isCountingDown && <button className="border px-2 py-1 hover:bg-gray-50" onClick={stop}>Stop</button>}
            </div>
        </div>
    )
}

export default CountdownTimer;