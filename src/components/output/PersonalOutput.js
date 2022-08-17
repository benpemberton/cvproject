import React from "react";

const PersonalOutput = ({ name, address, email, mobile, statement }) => {
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
};

export default PersonalOutput;
