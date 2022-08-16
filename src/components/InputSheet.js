import React from "react";
import Personal from "./Personal";
import Section from "./Section";
import Education from "./Education";
import Experience from "./Experience";

function InputSheet({ handler, add, remove, personal, education, experience }) {
  return (
    <div className="input-sheet">
      <div className="personal-box section">
        <Personal
          editing={true}
          handler={handler}
          sectionType={"personal"}
          {...personal}
        />
      </div>
      <div className="edu-box section">
        <h2>Education</h2>
        <Section
          editing={true}
          handler={handler}
          add={add}
          remove={remove}
          sectionType={"education"}
          entries={education}
          Form={Education}
        />
      </div>
      <div className="experience-box section">
        <h2>Experience</h2>
        <Section
          editing={true}
          handler={handler}
          add={add}
          remove={remove}
          sectionType={"experience"}
          entries={experience}
          Form={Experience}
        />
      </div>
    </div>
  );
}

export default InputSheet;
