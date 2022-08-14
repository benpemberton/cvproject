import React from "react";

function Personal({
  editing,
  sectionType,
  handler,
  first,
  last,
  email,
  mobile,
}) {
  if (editing) {
    return (
      <div>
        <form className="personal-form">
          <label htmlFor="first">First name:</label>
          <input
            type="text"
            name="first"
            value={first}
            onChange={(e) => handler(e, sectionType)}
          />
          <label htmlFor="last">Last name:</label>
          <input
            type="text"
            name="last"
            value={last}
            onChange={(e) => handler(e, sectionType)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => handler(e, sectionType)}
          />
          <label htmlFor="mobile">Mobile no.:</label>
          <input
            type="tel"
            name="mobile"
            value={mobile}
            onChange={(e) => handler(e, sectionType)}
          />
        </form>
      </div>
    );
  } else {
    return (
      <form className="personal-form saved">
        <p>{first}</p>
        <p>{last}</p>
        <p>{email}</p>
        <p>{mobile}</p>
      </form>
    );
  }
}

export default Personal;
