import React from "react";

function Education({ editing, entry, sectionType, handler, remove }) {
  if (editing) {
    return (
      <div className="form-wrap">
        <form className="edu-form" id={entry.id}>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            value={entry.subject}
            onChange={(e) => handler(e, sectionType)}
          />
          <label htmlFor="institution">Institution:</label>
          <input
            type="text"
            name="institution"
            value={entry.institution}
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
      <div className="entry-wrap">
        <div className="edu-output">
          <p>{entry.subject}</p>
          <p>{entry.institution}</p>
          <p>{entry.start}</p>
          <p>{entry.end}</p>
        </div>
      </div>
    );
  }
}

export default Education;
