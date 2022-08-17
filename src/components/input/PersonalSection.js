import React from "react";
import PersonalForm from "./PersonalForm";

const PersonalSection = ({ change, personal }) => {
  return (
    <div className="personal-input section">
      <PersonalForm change={change} sectionType={"personal"} {...personal} />
    </div>
  );
};

export default PersonalSection;
