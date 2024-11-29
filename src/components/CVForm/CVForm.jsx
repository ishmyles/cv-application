import { useState } from "react"
import cryptoRandomString from "crypto-random-string"

import "./CVForm.css"

import FormSection from "./FormSection"
import SelectInput from "./SelectInput"
import FormInput from "./FormInput"
import TextareaInput from "./TextareaInput"
import AddItemBtn from "./AddItemBtn"
import SaveBtn from "./SaveBtn"
import EducationItem from "./EducationItem"
import ExperienceItem from "./ExperienceItem"

const createNewEducationItem = () => ({id: cryptoRandomString({length: 5}), schoolName: "", degreeName: "", studyYearFrom: "", studyYearTo: ""});

const createNewExperienceItem = () => ({
    id: cryptoRandomString({length: 5}), 
    companyName: "", 
    position: "", 
    isCurrent: false,
    startingMonth: "", 
    endingMonth: "", 
    workYearFrom: "", 
    workYearTo: "", 
    responsibilities: [createNewResponsibility()]
});

const createNewResponsibility = () => ({id: cryptoRandomString({length: 5}), value: ""})

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
        // setPersonalInput({firstName: "", lastName: "", profession: "", phoneNo: "", email: "", linkedin: ""})
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
        // setEducationInput([]);
    };

    // Experience Info
    const [experienceInput, setExperienceInput] = useState(experienceInfo);

    const addExperienceItem = () => {
        setExperienceInput(prevState => [...prevState, createNewExperienceItem()])
    };

    const addResponsibilityItem = (key) => {
        setExperienceInput(prevState => prevState.map(exp => {
            if (exp.id === key) {
                return {...exp, responsibilities: [...exp.responsibilities, createNewResponsibility()]}
            } else {
                return exp;
            }
        }));
    }

    const updateExperienceInput = (key, inputName, inputValue) => {
        setExperienceInput(prevState => (prevState.map(item => {
            return (item.id === key) ? {...item, [inputName]: inputValue} : item;
        }))
        );
    }; 

    const updateResponsibilityInput = (key, responsibilityId, inputValue) => {
        setExperienceInput(prevState => prevState.map(exp => {
            if (exp.id === key) {
                const updatedExp = {...exp};

                updatedExp.responsibilities = updatedExp.responsibilities.map(r => {
                    return (r.id === responsibilityId) ? {id: r.id, value: inputValue} : r;
                })

                return updatedExp;
            } else {
                return exp;
            }
        }));
    }

    const handleExperienceSubmit = () => {
        onExperienceSubmit(experienceInput);
        // setExperienceInput([]);
    };

    return (
        <form id="cv-form">
            <FormSection sectionName="Personal">
                <div className="form-group">
                    <FormInput id="firstName" inputName="First Name" inputType="text" onChangeFunc={updatePersonalInput} inputValue={personalInput.firstName} />
                    <FormInput id="lastName" inputName="Last Name" inputType="text"  onChangeFunc={updatePersonalInput} inputValue={personalInput.lastName} />
                </div>
                <div className="form-group">
                    <FormInput id="profession" inputName="Profession" inputType="text"  onChangeFunc={updatePersonalInput} inputValue={personalInput.profession} />
                    <FormInput id="phoneNo" inputName="Phone Number" inputType="text"  onChangeFunc={updatePersonalInput} inputValue={personalInput.phoneNo} />
                </div>
                <div className="form-group">
                    <FormInput id="email" inputName="Email" inputType="text"  onChangeFunc={updatePersonalInput} inputValue={personalInput.email} />
                    <FormInput id="linkedin" inputName="LinkedIn" inputType="text" onChangeFunc={updatePersonalInput} inputValue={personalInput.linkedin} />
                </div>
                <SaveBtn submitFunc={handlePersonalSubmit}/>
            </FormSection>
            {/* <FormSection sectionName="General">

            </FormSection> */}
            <FormSection sectionName="Education">
                <AddItemBtn onClickFunc={addEducationItem} />
                {educationInput.map(item => (
                    <EducationItem key={item.id}>
                        <div className="form-group">
                            <FormInput id="schoolName" inputName="School Name" inputType="text" onChangeFunc={(inputName, inputValue) => updateEducationInput(item.id, inputName, inputValue)} inputValue={item.schoolName} /> 
                            <FormInput id="degreeName" inputName="Degree/Certificate" inputType="text" onChangeFunc={(inputName, inputValue) => updateEducationInput(item.id, inputName, inputValue)} inputValue={item.degreeName} /> 
                        </div>
                        <div className="form-group">
                            <FormInput id="studyYearFrom" inputName="Start Year" inputType="number" onChangeFunc={(inputName, inputValue) => updateEducationInput(item.id, inputName, inputValue)} inputValue={item.studyYearFrom} /> 
                            <FormInput id="studyYearTo" inputName="End Year" inputType="number" onChangeFunc={(inputName, inputValue) => updateEducationInput(item.id, inputName, inputValue)} inputValue={item.studyYearTo} />
                        </div>
                    </EducationItem> 
                ))}
                <SaveBtn submitFunc={handleEducationSubmit}/>
            </FormSection>
            <FormSection sectionName="Experience">
                <AddItemBtn onClickFunc={addExperienceItem} />
                {experienceInput.map(item => (
                    <ExperienceItem key={item.id}>
                        
                        <div className="form-group">
                            <FormInput id="companyName" inputName="Company Name" inputType="text" onChangeFunc={(inputName, inputValue) => updateExperienceInput(item.id, inputName, inputValue)} inputValue={item.companyName} /> 
                            <FormInput id="position" inputName="Position" inputType="text" onChangeFunc={(inputName, inputValue) => updateExperienceInput(item.id, inputName, inputValue)} inputValue={item.position} /> 
                        </div>
                        <FormInput id={"isCurrent-" + item.id} inputName="Is this your current position?" inputType="checkbox" onChangeFunc={(inputName, inputValue) => updateExperienceInput(item.id, inputName, inputValue)} inputValue={item.isCurrent} />
                        <div className="form-group">
                            <SelectInput id="startingMonth" label="Start" onChangeFunc={(inputName, inputValue) => updateExperienceInput(item.id, inputName, inputValue)} inputValue={item.startingMonth} />
                            <FormInput id="workYearFrom" inputName="Start Year" inputType="number" onChangeFunc={(inputName, inputValue) => updateExperienceInput(item.id, inputName, inputValue)} inputValue={item.workYearFrom} /> 
                            <SelectInput id="endingMonth" label="End" isCurrent={item.isCurrent} onChangeFunc={(inputName, inputValue) => updateExperienceInput(item.id, inputName, inputValue)} inputValue={item.endingMonth} />
                            <FormInput id="workYearTo" inputName="End Year" isCurrent={item.isCurrent} inputType="number" onChangeFunc={(inputName, inputValue) => updateExperienceInput(item.id, inputName, inputValue)} inputValue={item.workYearTo} />
                        </div>
                        <fieldset className="sub-card">
                            <legend>Responsibilities</legend>
                            {item.responsibilities.map(responsibility => 
                                <TextareaInput key={responsibility.id} id={"item-" + responsibility.id} onChangeFunc={(inputValue) => updateResponsibilityInput(item.id, responsibility.id, inputValue)} inputValue={responsibility.value}  />
                            )}
                            <AddItemBtn onClickFunc={() => addResponsibilityItem(item.id)} />
                        </fieldset>
                    </ExperienceItem> 
                ))}
                <SaveBtn submitFunc={handleExperienceSubmit}/>
            </FormSection>
        </form>
    )
}