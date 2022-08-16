import React from "react";

function Education({ editing, entry, sectionType, handler, remove, convert }) {
  if (editing) {
    return (
      <div className="form-wrap">
        <form className="edu-form" id={entry.id}>
          <label htmlFor="institution">Institution:</label>
          <input
            type="text"
            name="institution"
            value={entry.institution}
            onChange={(e) => handler(e, sectionType)}
          />
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={entry.qualification}
            onChange={(e) => handler(e, sectionType)}
          />
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            value={entry.subject}
            onChange={(e) => handler(e, sectionType)}
          />
          <label htmlFor="start">Start:</label>
          <input
            type="month"
            name="start"
            value={entry.start}
            onChange={(e) => handler(e, sectionType)}
          />
          <label htmlFor="end">End:</label>
          <input
            type="month"
            name="end"
            value={entry.end}
            onChange={(e) => handler(e, sectionType)}
          />
          <button className="remove" onClick={(e) => remove(e, sectionType)}>
            &#8211;
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <>
        <div className="education-entry">
          <div className="entry-wrap">
            <span>
              <strong>{entry.institution}</strong>{" "}
            </span>
            <p className="position-date">
              ({convert(entry.start)} - {convert(entry.end)})
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
  }
}

export default Education;
