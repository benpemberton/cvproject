import React from "react";
import Personal from "./Personal";
import Section from "./Section";
import Education from "./Education";
import Experience from "./Experience";

function OutputSheet({ personal, education, experience }) {
  return (
    <div className="output-sheet">
      <Personal {...personal} />
      <div className="experience-output">
        <h2>Experience</h2>
        <hr></hr>
        <Section entries={experience} Form={Experience} />
      </div>
      <div className="education-output">
        <h2>Education</h2>
        <hr></hr>
        <Section entries={education} Form={Education} />
      </div>
    </div>
  );
}

export default OutputSheet;
