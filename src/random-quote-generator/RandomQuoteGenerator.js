import { useState } from 'react';
import quotes from './quotes.json';

const randomizeIndex = (length, prev) => {
    if (length <= 1) {
        return 0;
    }
    
    const index = Math.floor(Math.random() * length);

    if (prev >= 0 && index === prev) {
        return randomizeIndex(length, prev);
    }

    return index;
}

function RandomQuoteGenerator() {
    const [index, setIndex] = useState(0);
    const quote = quotes[index];

    const generateQuote = () => setIndex(randomizeIndex(quotes.length, index));

    return (
        <div className="flex flex-col self-start gap-2 items-center w-96 border p-2 bg-white">
            {quote && <Quote quote={quote}></Quote> || <span>No quote set.</span>}
            <button className="btn" onClick={generateQuote}>New quote</button>
        </div>
    )
}

function Quote({ quote }) {
    return (
        <div className="flex flex-col gap-1 self-start">
            <span className="text-lg italic">"{quote.text}"</span>
            <span className="text-slate-600">- {quote.author}</span>
        </div>
    );
}

export default RandomQuoteGenerator;
