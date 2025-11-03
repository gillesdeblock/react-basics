import ColorPickerPreview from './ColorPickerPreview';

function ColorPicker({ value, onInput = () => {} }) {
    return (
        <div className="flex gap-2 items-center">
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