import React from "react";

function EducationForm(props) {
  if (props.editing) {
    return (
      <div className="form-wrap">
        <form className="edu-form" id={props.section.id}>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            value={props.section.subject}
            onChange={(e) => props.handler(e, props.sectionType)}
          />
          <label htmlFor="institution">Institution:</label>
          <input
            type="text"
            name="institution"
            value={props.section.institution}
            onChange={(e) => props.handler(e, props.sectionType)}
          />
          <label htmlFor="start">Start:</label>
          <input
            type="month"
            name="start"
            value={props.section.start}
            onChange={(e) => props.handler(e, props.sectionType)}
          />
          <label htmlFor="end">End:</label>
          <input
            type="month"
            name="end"
            value={props.section.end}
            onChange={(e) => props.handler(e, props.sectionType)}
          />
          <button
            className="remove"
            onClick={(e) => props.remove(e, props.sectionType)}
          >
            &#8211;
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="form-wrap">
        <form className="edu-form saved" id={props.section.id}>
          <label htmlFor="subject">Subject:</label>
          <p>{props.section.subject}</p>
          <label htmlFor="institution">Institution:</label>
          <p>{props.section.institution}</p>
          <label htmlFor="start">Start:</label>
          <p>{props.section.start}</p>
          <label htmlFor="end">End:</label>
          <p>{props.section.end}</p>
        </form>
      </div>
    );
  }
}

export default EducationForm;
