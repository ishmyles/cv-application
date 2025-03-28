import "./SelectInput.css"

export default function SelectInput({id, label, onChangeFunc, isCurrent, inputValue}) {
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChangeFunc(name, value)
    }
    return (
        <div className="input-group">
            <label htmlFor={id}>{label} Month</label>
            <select name={id} id={id} value={inputValue} onChange={handleInputChange} disabled={isCurrent && id === "endingMonth"}>
                <option value=""></option>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
            </select>
        </div>
    );
}