import './ColorPicker.css';
import ColorPickerPreview from './ColorPickerPreview';

function ColorPicker({ value, onInput = () => {} }) {
    return (
        <div className="color-picker">
            <input
                type="color"
                value={value}
                onInput={e => onInput(e.target.value)}
            ></input>
            <ColorPickerPreview color={value}></ColorPickerPreview>
        </div>
    );
}

export default ColorPicker;