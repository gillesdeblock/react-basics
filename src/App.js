import { useState } from 'react';
import ColorPicker from './color-picker/ColorPicker';
import Exercise from './exercise/Exercise';
import List from './list/List';

function App() {
  const [color, setColor] = useState('#000000');

  return (
    <div className="p-6">
      <div className="flex flex-col gap-4">
        <Exercise title="Color Picker">
          <ColorPicker value={color} onInput={setColor} />
        </Exercise>
        <Exercise title="Movie List">
          <List items={['Bring Her Back', 'The Terminator', 'Prisoners', 'Finding Nemo']}></List>
        </Exercise>
      </div>
    </div>
  );
}

export default App;
