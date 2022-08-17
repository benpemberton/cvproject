import React from "react";
import PersonalSection from "./PersonalSection";
import MappedSection from "./MappedSection";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";

const InputSheet = ({
  change,
  add,
  remove,
  personal,
  education,
  experience,
}) => {
  return (
    <div className="input-sheet">
      <PersonalSection change={change} personal={personal} />
      <MappedSection
        change={change}
        add={add}
        remove={remove}
        entries={experience}
        Form={ExperienceForm}
        sectionType={"experience"}
        heading={"Experience"}
      />
      <MappedSection
        change={change}
        add={add}
        remove={remove}
        entries={education}
        Form={EducationForm}
        sectionType={"education"}
        heading={"Education"}
      />
    </div>
  );
};

export default InputSheet;
