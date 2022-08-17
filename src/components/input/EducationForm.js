import React from "react";
import Button from "../Button";

const EducationForm = ({ entry, sectionType, change, remove }) => {
  return (
    <div className="form-wrap">
      <form className="edu-form" id={entry.id}>
        <label htmlFor="institution">Institution:</label>
        <input
          type="text"
          name="institution"
          value={entry.institution}
          onChange={(e) => change(e, sectionType)}
        />
        <label htmlFor="qualification">Qualification:</label>
        <input
          type="text"
          name="qualification"
          value={entry.qualification}
          onChange={(e) => change(e, sectionType)}
        />
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          value={entry.subject}
          onChange={(e) => change(e, sectionType)}
        />
        <label htmlFor="start">Start:</label>
        <input
          type="month"
          name="start"
          value={entry.start}
          onChange={(e) => change(e, sectionType)}
        />
        <label htmlFor="end">End:</label>
        <input
          type="month"
          name="end"
          value={entry.end}
          onChange={(e) => change(e, sectionType)}
        />
        <Button
          className={"remove"}
          text={"–"}
          cb={(e) => remove(e, sectionType)}
        />
      </form>
    </div>
  );
};

export default EducationForm;
