export function ColorPickerPreview({ color }) {
    const css = {
        color: color,
        fontWeight: 'bold',
    };

    return <div style={css}>{color}</div>;
}

export default ColorPickerPreview;