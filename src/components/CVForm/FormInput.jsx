
export default function FormInput({ id, inputName, inputType, onChangeFunc, inputValue }) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChangeFunc(name, value)
    }
    return (
        <div className="input-group">
            <label htmlFor={id}>{inputName}</label>
            <input type={inputType} name={id} id={id} value={inputValue} onChange={handleInputChange} />
        </div>
);
}