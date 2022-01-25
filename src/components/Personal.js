import React from "react";

function Personal(props) {
  if (props.editing) {
    return (
      <div>
        <form className="personal-form">
          <label htmlFor="first">First name:</label>
          <input
            type="text"
            name="first"
            value={props.first}
            onChange={(e) => props.handler(e, props.sectionType)}
          />
          <label htmlFor="last">Last name:</label>
          <input
            type="text"
            name="last"
            value={props.last}
            onChange={(e) => props.handler(e, props.sectionType)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={props.email}
            onChange={(e) => props.handler(e, props.sectionType)}
          />
          <label htmlFor="mobile">Mobile no.:</label>
          <input
            type="tel"
            name="mobile"
            value={props.mobile}
            onChange={(e) => props.handler(e, props.sectionType)}
          />
        </form>
      </div>
    );
  } else {
    return (
      <form className="personal-form saved">
        <p>{props.first}</p>
        <p>{props.last}</p>
        <p>{props.email}</p>
        <p>{props.mobile}</p>
      </form>
    );
  }
}

export default Personal;
