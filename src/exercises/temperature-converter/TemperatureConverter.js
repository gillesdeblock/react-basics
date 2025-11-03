import { useState } from "react";

function TemperatureConverter() {
    const toCelsius = value => ((value - 32) * 5) / 9;
    const toFahrenheit = value => (value * 9) / 5 + 32;

    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(toFahrenheit(celsius));

    const onInputCelsius = (value) => {
        setCelsius(value);
        setFahrenheit(toFahrenheit(value));
    };
    const onInputFahrenheit = (value) => {
        setFahrenheit(value);
        setCelsius(toCelsius(value));
    };

    return (
        <>
            <label for="celsius">Celsius</label>
            <TemperatureInput id="celsius" value={celsius} onInput={onInputCelsius}></TemperatureInput>

            <label for="fahrenheit">Fahrenheit</label>
            <TemperatureInput id="fahrenheit" value={fahrenheit} onInput={onInputFahrenheit}></TemperatureInput>
        </>
    )
}

function TemperatureInput({ id, value, onInput }) {
    return <input id={id} value={value} className="border" type="number" onInput={e => onInput(e.target.value)}></input>
}

export default TemperatureConverter;