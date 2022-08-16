import React from "react";

function Personal({
  editing,
  sectionType,
  handler,
  name,
  address,
  email,
  mobile,
  statement,
}) {
  if (editing) {
    return (
      <>
        <form className="personal-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => handler(e, sectionType)}
          />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={address}
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
          <label htmlFor="statement">Personal statement:</label>
          <textarea
            name="statement"
            value={statement}
            onChange={(e) => handler(e, sectionType)}
          ></textarea>
        </form>
      </>
    );
  } else {
    return (
      <div className="personal-output">
        <p className="name-header">{name}</p>
        <div className="statement-with-details">
          <div className="statement">
            <h2>Statement</h2>
            <hr></hr>
            <p>{statement}</p>
          </div>
          <div className="personal-details">
            <p>{address}</p>
            <p>{email}</p>
            <p>{mobile}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;
