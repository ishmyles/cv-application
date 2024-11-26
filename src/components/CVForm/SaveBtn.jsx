export default function SaveBtn({submitFunc}) {
    const handleSubmit = e => {
        e.preventDefault();
        submitFunc();
    } 
    return <button type="submit" onClick={handleSubmit}>Save</button>
}