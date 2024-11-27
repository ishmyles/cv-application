import "./FormInput.css"

export default function FormInput({ id, inputName, inputType, isCurrent, onChangeFunc, inputValue }) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChangeFunc(name, (inputType === "checkbox") ? !inputValue : value)
    }
    return (
        <div className="input-group">
            <label htmlFor={id}>{inputName}</label>
            <input type={inputType} 
                name={id} 
                id={id} 
                value={inputValue} 
                onChange={handleInputChange} 
                checked={(inputType === "checkbox") ? inputValue : null } 
                disabled={isCurrent && id === "workYearTo"}
            />
        </div>
);
}