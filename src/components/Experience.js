import React from "react";

function Experience({ editing, entry, sectionType, handler, remove, convert }) {
  if (editing) {
    return (
      <div className="form-wrap">
        <form className="experience-form" id={entry.id}>
          <label htmlFor="title">Job title:</label>
          <input
            type="text"
            name="title"
            value={entry.title}
            onChange={(e) => handler(e, sectionType)}
          />
          <label htmlFor="employer">Employer:</label>
          <input
            type="text"
            name="employer"
            value={entry.employer}
            onChange={(e) => handler(e, sectionType)}
          />
          <label htmlFor="duties">Duties:</label>
          <textarea
            type="text"
            name="duties"
            value={entry.duties}
            onChange={(e) => handler(e, sectionType)}
          ></textarea>
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
            -
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <>
        <div className="experience-entry">
          <div className="entry-wrap">
            <span className="title">
              <strong>{entry.title}</strong>
            </span>{" "}
            - <span className="employer">{entry.employer}</span>
            <p className="position-date">
              ({convert(entry.start)} - {convert(entry.end)})
            </p>
            <p className="duties">
              <em>{entry.duties}</em>
            </p>
          </div>
        </div>
        <hr></hr>
      </>
    );
  }
}

export default Experience;
