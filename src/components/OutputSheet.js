import React from "react";
import Personal from "./Personal";
import Section from "./Section";
import Education from "./Education";
import Work from "./Work";

function OutputSheet({ personal, education, work }) {
  return (
    <div className="output-sheet">
      <div className="personal-box section">
        <Personal {...personal} />
      </div>
      <div className="edu-box section">
        <h2>Education</h2>
        <Section entries={education} Form={Education} />
      </div>
      <div className="work-box section">
        <h2>Work</h2>
        <Section entries={work} Form={Work} />
      </div>
    </div>
  );
}

export default OutputSheet;
