import { useState } from "react"
import cryptoRandomString from "crypto-random-string"

import "./CVForm.css"

import FormSection from "./FormSection"
import SelectInput from "./SelectInput"
import FormInput from "./FormInput"
import AddItemBtn from "./AddItemBtn"
import SaveBtn from "./SaveBtn"
import EducationItem from "./EducationItem"
import ExperienceItem from "./ExperienceItem"

const createNewEducationItem = () => ({id: cryptoRandomString({length: 5}), schoolName: "", degreeName: "", studyYearFrom: "", studyYearTo: ""});
const createNewExperienceItem = () => ({id: cryptoRandomString({length: 5}), companyName: "", position: "", startingMonth: "Jan", endingMonth: "Jan", workYearFrom: "", workYearTo: ""});
//, experienceInfo
export default function CVForm({ personalInfo, onPersonalSubmit, educationInfo, onEducationSubmit, experienceInfo, onExperienceSubmit }) {
    // Personal Info
    const [personalInput, setPersonalInput] = useState(personalInfo);

    const updatePersonalInput = (inputName, inputValue) => {
        setPersonalInput(prevState => ({
                ...prevState,
                [inputName]: inputValue
            })
        );
    };

    const handlePersonalSubmit = () => {
        onPersonalSubmit(personalInput);
        setPersonalInput({firstName: "", lastName: "", email: "", phoneNo: "", linkedin: ""})
    };

    // Education Info
    const [educationInput, setEducationInput] = useState(educationInfo);

    const addEducationItem = () => {
        setEducationInput(prevState => [...prevState, createNewEducationItem()])
    };

    const updateEducationInput = (key, inputName, inputValue) => {
        setEducationInput(prevState => (prevState.map(item => {
            return (item.id === key) ? {...item, [inputName]: inputValue} : item;
        }))
        );
    }; 

    const handleEducationSubmit = () => {
        onEducationSubmit(educationInput);
        setEducationInput([]);
    };

    // Experience Info
    const [experienceInput, setExperienceInput] = useState(experienceInfo);

    const addExperienceItem = () => {
        setExperienceInput(prevState => [...prevState, createNewExperienceItem()])
    };

    const updateExperienceInput = (key, inputName, inputValue) => {
        setExperienceInput(prevState => (prevState.map(item => {
            return (item.id === key) ? {...item, [inputName]: inputValue} : item;
        }))
        );
    }; 

    const handleExperienceSubmit = () => {
        onExperienceSubmit(experienceInput);
        setExperienceInput([]);
    };

    return (
        <form id="cv-form">
            <FormSection sectionName="Personal">
                <div className="form-group">
                    <FormInput id="firstName" inputName="First Name" inputType="text" onChangeFunc={updatePersonalInput} inputValue={personalInput.firstName} />
                    <FormInput id="lastName" inputName="Last Name" inputType="text"  onChangeFunc={updatePersonalInput} inputValue={personalInput.lastName} />
                </div>
                <FormInput id="email" inputName="Email" inputType="text"  onChangeFunc={updatePersonalInput} inputValue={personalInput.email} />
                <FormInput id="phoneNo" inputName="Phone Number" inputType="text"  onChangeFunc={updatePersonalInput} inputValue={personalInput.phoneNo} />
                <FormInput id="linkedin" inputName="LinkedIn" inputType="text" onChangeFunc={updatePersonalInput} inputValue={personalInput.linkedin} />
                <SaveBtn submitFunc={handlePersonalSubmit}/>
            </FormSection>
            {/* <FormSection sectionName="General">

            </FormSection> */}
            <FormSection sectionName="Education">
                {educationInput.map(item => (
                    <EducationItem key={item.id}>
                        <FormInput id="schoolName" inputName="School Name" inputType="text" onChangeFunc={(inputName, inputValue) => updateEducationInput(item.id, inputName, inputValue)} inputValue={item.schoolName} /> 
                        <FormInput id="degreeName" inputName="Degree/Certificate" inputType="text" onChangeFunc={(inputName, inputValue) => updateEducationInput(item.id, inputName, inputValue)} inputValue={item.degreeName} /> 
                        <FormInput id="studyYearFrom" inputName="Start Year" inputType="number" onChangeFunc={(inputName, inputValue) => updateEducationInput(item.id, inputName, inputValue)} inputValue={item.studyYearFrom} /> 
                        <FormInput id="studyYearTo" inputName="End Year" inputType="number" onChangeFunc={(inputName, inputValue) => updateEducationInput(item.id, inputName, inputValue)} inputValue={item.studyYearTo} />
                    </EducationItem> 
                ))}
                <AddItemBtn onClickFunc={addEducationItem} />
                <SaveBtn submitFunc={handleEducationSubmit}/>
            </FormSection>
            <FormSection sectionName="Experience">
                {experienceInput.map(item => (
                    <ExperienceItem key={item.id}>
                        <FormInput id="companyName" inputName="Company Name" inputType="text" onChangeFunc={(inputName, inputValue) => updateExperienceInput(item.id, inputName, inputValue)} inputValue={item.companyName} /> 
                        <FormInput id="position" inputName="Position" inputType="text" onChangeFunc={(inputName, inputValue) => updateExperienceInput(item.id, inputName, inputValue)} inputValue={item.position} /> 
                        <SelectInput id="startingMonth" label="Starting" onChangeFunc={(inputName, inputValue) => updateExperienceInput(item.id, inputName, inputValue)} inputValue={item.startingMonth} />
                        <FormInput id="workYearFrom" inputName="Start Year" inputType="number" onChangeFunc={(inputName, inputValue) => updateExperienceInput(item.id, inputName, inputValue)} inputValue={item.workYearFrom} /> 
                        <SelectInput id="endingMonth" label="Ending" onChangeFunc={(inputName, inputValue) => updateExperienceInput(item.id, inputName, inputValue)} inputValue={item.endingMonth} />
                        <FormInput id="workYearTo" inputName="End Year" inputType="number" onChangeFunc={(inputName, inputValue) => updateExperienceInput(item.id, inputName, inputValue)} inputValue={item.workYearTo} />
                        {/*item.responsibilities.map(subitem => <FormInput key={subitem.id} id="workYearTo" inputName="Add responsibility" inputType="text" onChangeFunc={(inputName, inputValue) => updateEducationInput(item.id, inputName, inputValue)} inputValue={subitem.value} />)*/}
                    </ExperienceItem> 
                ))}
                <AddItemBtn onClickFunc={addExperienceItem} />
                <SaveBtn submitFunc={handleExperienceSubmit}/>
            </FormSection>
        </form>
    )
}