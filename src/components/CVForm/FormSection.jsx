import "./FormSection.css"

export default function FormSection({ children, sectionName }) {
    return (
        <div className="form-section">
            <h2>{sectionName}</h2>
            {children}
        </div>
    )
}