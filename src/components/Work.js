import React from "react";

function Work({ editing, entry, sectionType, handler, remove }) {
  if (editing) {
    return (
      <div className="form-wrap">
        <form className="work-form" id={entry.id}>
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
      <div className="entry-wrap">
        <div className="work-output">
          <p>{entry.title}</p>
          <p>{entry.employer}</p>
          <p>{entry.duties}</p>
          <p>{entry.start}</p>
          <p>{entry.end}</p>
        </div>
      </div>
    );
  }
}

export default Work;
