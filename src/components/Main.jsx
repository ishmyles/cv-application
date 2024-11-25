import "./Main.css"

import CVForm from './CVForm/CVForm' 
import CVDocument from './CVDocument/CVDocument'

export default function Main() {
    // State for cv info goes here
    return (
        <main id="cv-formatter">
            <CVForm />
            <CVDocument />
        </main>
    )
}