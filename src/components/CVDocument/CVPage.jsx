import "./CVPage.css"

const renderEducationList = (item) => (
    <li key={item.id}>
        <p><strong>{item.schoolName}</strong></p>
        <p><strong>{item.studyYearFrom} - {item.studyYearTo}</strong></p>
        <p>{item.degreeName}</p>
    </li>
)

const renderExperienceList = (item) => (
    <li key={item.id}>
        <p><strong>{item.companyName}</strong></p>
        <p><strong>{item.position}</strong></p>
        <p><strong>{item.startingMonth} {item.workYearFrom} - {(item.isCurrent) ? "Present" : item.endingMonth + " " + item.workYearTo} </strong></p>
        <p><strong>Responsibilities</strong></p>
        <ul className="responsibilities-list">
            {item.responsibilities.map(renderResponsibilitiesList)}
        </ul>
    </li>
)

const renderResponsibilitiesList = (item) => <li key={item.id}>{item.value}</li>

export default function CVPage({ personalInfo, educationInfo, experienceInfo }) {
    return (
        <div id="cv-page">
            <div className="personal-section">
                <p><strong>{personalInfo.firstName} {personalInfo.lastName}</strong></p>
                <p>{personalInfo.profession}</p>
                <p>{personalInfo.phoneNo}</p>
                <p>{personalInfo.email}</p>
                <p><a href={personalInfo.linkedin}>{personalInfo.linkedin}</a></p>
            </div>
            <div className="education-section">
                {(!educationInfo.length) ? null : <p className="section-title"><strong>EDUCATION HISTORY</strong></p>}
                <ul>
                    {educationInfo.map(renderEducationList)}
                </ul>
            </div>
            <div className="experience-section">
                {(!experienceInfo.length) ? null : <p className="section-title"><strong>WORK EXPERIENCE</strong></p>}
                <ul>
                    {experienceInfo.map(renderExperienceList)}
                </ul>
            </div>
        </div>
    )
}