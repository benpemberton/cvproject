import React from "react";
import EducationEntry from "./EducationEntry";

const EducationOutput = ({ entries }) => {
  const educationEntries = () => {
    return (
      <>
        {entries.map((entry) => (
          <EducationEntry key={entry.id} entry={entry} />
        ))}
      </>
    );
  };

  return (
    <div className="education-output">
      <h2>Education</h2>
      <hr></hr>
      {educationEntries()}
    </div>
  );
};

export default EducationOutput;
