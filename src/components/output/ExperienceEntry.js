import React from "react";
import convertDate from "../../utils/convertDate";

const ExperienceEntry = ({ entry }) => {
  return (
    <>
      <div className="experience-entry">
        <div className="entry-wrap">
          <span className="title">
            <strong>{entry.title}</strong>
          </span>{" "}
          - <span className="employer">{entry.employer}</span>
          <p className="position-date">
            ({convertDate(entry.start)} - {convertDate(entry.end)})
          </p>
          <p className="duties">
            <em>{entry.duties}</em>
          </p>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default ExperienceEntry;
