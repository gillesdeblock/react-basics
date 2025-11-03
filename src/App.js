import { useState } from 'react';
import Exercise from './Exercise';
import ColorPicker from './exercises/color-picker/ColorPicker';
import List from './exercises/list/List';
import CountdownTimer from './exercises/countdown/CountdownTimer';
import RandomQuoteGenerator from './exercises/random-quote-generator/RandomQuoteGenerator';
import DarkModeApp from './exercises/dark-mode/DarkModeApp';
import AccordionGroup from './exercises/accordion/AccordionGroup';
import Accordion from './exercises/accordion/Accordion';
import TemperatureConverter from './exercises/temperature-converter/TemperatureConverter';

function App() {
  const [color, setColor] = useState('#000000');

  return (
    <div className="p-6 h-full">
      <div className="flex flex-col gap-4 h-full overflow-auto">
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
        <Exercise title="Dark mode toggle">
          <DarkModeApp></DarkModeApp>
        </Exercise>
        <Exercise title="Accordion">
          <AccordionGroup>
            <Accordion id="1" title="First accordion">Lorem ipsum dolor sit amet</Accordion>
            <Accordion id="2" title="Second accordion">Lorem ipsum dolor sit amet</Accordion>
            <Accordion id="3" title="Third accordion">Lorem ipsum dolor sit amet</Accordion>
          </AccordionGroup>
        </Exercise>
        <Exercise title="Temperature converter">
          <TemperatureConverter></TemperatureConverter>
        </Exercise>
      </div>
    </div>
  );
}

export default App;
