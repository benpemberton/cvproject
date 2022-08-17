import React from "react";
import convertDate from "../../utils/convertDate";

const EducationEntry = ({ entry }) => {
  return (
    <>
      <div className="education-entry">
        <div className="entry-wrap">
          <span>
            <strong>{entry.institution}</strong>{" "}
          </span>
          <p className="position-date">
            ({convertDate(entry.start)} - {convertDate(entry.end)})
          </p>
          <p>{entry.qualification}</p>
          <p>
            <em>{entry.subject}</em>
          </p>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default EducationEntry;
