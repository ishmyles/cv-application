import "./CVDocument.css";
import CVPage from './CVPage'

export default function CVDocument({ personalInfo, educationInfo, experienceInfo }) {
    return (
        <div id="cv-document">
            <CVPage personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
        </div>
    );
}