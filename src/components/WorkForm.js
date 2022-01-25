import React from "react";

function WorkForm(props) {
  if (props.editing) {
    return (
      <div className="form-wrap">
        <form className="work-form" id={props.section.id}>
          <label htmlFor="title">Job title:</label>
          <input
            type="text"
            name="title"
            value={props.section.title}
            onChange={(e) => props.handler(e, props.sectionType)}
          />
          <label htmlFor="employer">Employer:</label>
          <input
            type="text"
            name="employer"
            value={props.section.employer}
            onChange={(e) => props.handler(e, props.sectionType)}
          />
          <label htmlFor="duties">Duties:</label>
          <textarea
            type="text"
            name="duties"
            value={props.section.duties}
            onChange={(e) => props.handler(e, props.sectionType)}
          ></textarea>
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
            -
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="form-wrap">
        <form className="work-form saved" id={props.section.id}>
          <label htmlFor="title">Job title:</label>
          <p>{props.section.title}</p>
          <label htmlFor="employer">Employer:</label>
          <p>{props.section.employer}</p>
          <label htmlFor="duties">Duties:</label>
          <p>{props.section.duties}</p>
          <label htmlFor="start">Start:</label>
          <p>{props.section.start}</p>
          <label htmlFor="end">End:</label>
          <p>{props.section.end}</p>
        </form>
      </div>
    );
  }
}

export default WorkForm;
