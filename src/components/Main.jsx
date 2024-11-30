import { useState } from "react"

import "./Main.css"

import CVForm from './CVForm/CVForm' 
import CVDocument from './CVDocument/CVDocument'



export default function Main() {
    const [personalInfo, setPersonalInfo] = useState({firstName: "", lastName: "", profession: "", phoneNo: "", email: "", linkedin: ""});
    const updatePersonalInfo = (newData) => setPersonalInfo(newData);

    const [educationInfo, setEducationInfo] = useState([]);
    const updateEducationInfo = (newData) => setEducationInfo(newData);

    const [experienceInfo, setExperienceInfo] = useState([]);
    const updateExperienceInfo = (newData) => setExperienceInfo(newData);

    return (
        <main id="cv-formatter">
            <CVForm personalInfo={personalInfo} onPersonalSubmit={updatePersonalInfo} educationInfo={educationInfo} onEducationSubmit={updateEducationInfo} experienceInfo={experienceInfo} onExperienceSubmit={updateExperienceInfo} />
            <CVDocument personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
        </main>
    )
}