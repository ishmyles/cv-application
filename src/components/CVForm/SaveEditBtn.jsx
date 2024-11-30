import "./SaveEditBtn.css"

import { useState } from "react";

export default function SaveEditBtn({submitFunc, editFunc}) {
    const [isEdit, setIsEdit] = useState(false);
    
    const handleSubmit = e => {
        e.preventDefault();
        if (isEdit) {
            editFunc();
            // setIsEdit(false);

        } else {
            submitFunc();
            // setIsEdit(true);
        }
        setIsEdit(prevState => !prevState);
    } 
    return <button type="submit" className={(isEdit) ? "btn-edit" : "btn-save"} onClick={handleSubmit}>{(isEdit) ? "Edit" : "Save"}</button>
}