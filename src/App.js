import './App.css';

import { useState } from 'react';
import ColorPicker from './color-picker/ColorPicker';
import Exercise from './exercise/Exercise';

function App() {
  const [color, setColor] = useState('#000000');

  return (
    <div className="App">
      <div className="exercises">
        <Exercise title="Color Picker">
          <ColorPicker value={color} onInput={setColor} />
        </Exercise>
      </div>
    </div>
  );
}

export default App;
