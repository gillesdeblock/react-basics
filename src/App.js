import { useState } from 'react';
import Exercise from './exercise/Exercise';
import ColorPicker from './color-picker/ColorPicker';
import List from './list/List';
import CountdownTimer from './countdown/CountdownTimer';
import RandomQuoteGenerator from './random-quote-generator/RandomQuoteGenerator';

function App() {
  const [color, setColor] = useState('#000000');

  return (
    <div className="p-6 bg-gray-50 h-full">
      <div className="flex flex-col gap-4">
        <Exercise title="Color Picker">
          <ColorPicker value={color} onInput={setColor} />
        </Exercise>
        <Exercise title="Movie List">
          <List items={['Bring Her Back', 'The Terminator', 'Prisoners', 'Finding Nemo']}></List>
        </Exercise>
        <Exercise title="Countdown Timer">
          <CountdownTimer></CountdownTimer>
        </Exercise>
        <Exercise title="Random Quote Generator">
          <RandomQuoteGenerator></RandomQuoteGenerator>
        </Exercise>
      </div>
    </div>
  );
}

export default App;
