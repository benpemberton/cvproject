import React from "react";
import Personal from "./Personal";
import Section from "./Section";
import Education from "./Education";
import Work from "./Work";

function InputSheet({ handler, add, remove, personal, education, work }) {
  return (
    <div className="input-sheet">
      <div className="personal-box section">
        <Personal
          editing={"true"}
          sectionType="personal"
          handler={handler}
          {...personal}
        />
      </div>
      <div className="edu-box section">
        <h2>Education</h2>
        <Section
          editing={"true"}
          entries={education}
          sectionType="education"
          handler={handler}
          add={add}
          remove={remove}
          Form={Education}
        />
      </div>
      <div className="work-box section">
        <h2>Work</h2>
        <Section
          editing={"true"}
          entries={work}
          sectionType="work"
          handler={handler}
          add={add}
          remove={remove}
          Form={Work}
        />
      </div>
    </div>
  );
}

export default InputSheet;
