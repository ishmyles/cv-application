import "./FormInput.css"

export default function FormInput({ id, inputName, inputType, isCurrent, onChangeFunc, inputValue }) {
    const [idName, uniqueid ] = id.split("-")
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChangeFunc(name, (inputType === "checkbox") ? !inputValue : value)
    }

    const inputElement = 
        <input type={inputType} 
            name={idName} 
            id={(inputType === "checkbox") ? idName + "-" + uniqueid : idName} 
            value={inputValue} 
            onChange={handleInputChange} 
            checked={(inputType === "checkbox") ? inputValue : null } 
            disabled={isCurrent && id === "workYearTo"}
        />
        
    return (
        <div className="input-group">
            <label htmlFor={id}>{inputName} {(inputType === "checkbox") ? inputElement : null}</label>
            {(inputType !== "checkbox") ? inputElement : null}
        </div>
);
}