import "./AddItemBtn.css"

export default function AddItemBtn({ onClickFunc }) {
    return <button type="button" className="btn-add" onClick={onClickFunc}>Add</button>
}