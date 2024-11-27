export default function TextareaInput({ id, inputValue, onChangeFunc }) {
    const handleInputChange = (event) => {
        const { value } = event.target;
        onChangeFunc(value)
    }
    return (
        <div style={{display: "flex"}}>
            <textarea id={id} name={id} value={inputValue} onChange={handleInputChange} rows="2" cols="33" style={{flex: 1, resize: "none"}}></textarea>
        </div>   
    )
}